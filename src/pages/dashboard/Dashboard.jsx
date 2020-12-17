import React, { useState, useCallback, useEffect } from "react";
import moment from "moment";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";
import DateDisplay from "../../components/dateDisplay/DateDisplay";
import MessengerGraph from "../../components/graphs/messengerGraph/MessengerGraph";
import SalesGraph from "../../components/graphs/salesGraph/SalesGraph";
import SiteLoader from "../../components/siteLoader/SiteLoader";

import fbIcon from "../../assets/facebook.svg";
import mesIcon from "../../assets/messenger.svg";
import phIcon from "../../assets/phone.svg";
import moneyIcon from "../../assets/money.svg";
import infoIcon from "../../assets/info.svg";

import "./Dashboard.scss";

import { oneDayData, sevenDaysData, thirtyDaysData, moreData } from "./DashboardConstants";

//------------------------------------------------------------------
//Some Helpers
//------------------------------------------------------------------
const initialStartDate = moment();
const initialEndDate = moment();

const ranges = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(6, "days"), moment()],
    "Last 30 Days": [moment().subtract(29, "days"), moment()],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
};

const DashboardPage = () => {
    //------------------------------------------------------------------
    //States
    //------------------------------------------------------------------
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [dateRange, setDateRange] = useState(
        initialStartDate.format("MMMM D, YYYY") + " - " + initialEndDate.format("MMMM D, YYYY")
    );
    const [graphDateLabels, setGraphDateLabels] = useState([moment().format("DD-MM-YY")]);
    const [displayLoader, setDisplayLoader] = useState(true);
    const [cardValues, setCardValues] = useState({
        facebookFans: 100,
        optInUsers: 230,
        totalOrders: 320,
        toalNetSales: "$812.14",
        orderValue: "278.42"
    });

    //------------------------------------------------------------------
    //When date changes fire this function
    //------------------------------------------------------------------
    const handleDateChanged = useCallback((e, picker) => {
        setDateRange(picker.startDate.format("MMMM D, YYYY") + " - " + picker.endDate.format("MMMM D, YYYY"));
    }, []);

    //------------------------------------------------------------------
    //Toggle the display of the sidebar
    //------------------------------------------------------------------
    const handleToggleSidebar = useCallback(() => {
        setIsSidebarOpen(!isSidebarOpen);
    }, [isSidebarOpen]);

    //------------------------------------------------------------------
    //Constants for card
    //------------------------------------------------------------------
    const CARD_INFO = [
        {
            title: "Total Facebook Fans",
            number: cardValues.facebookFans,
            logo: fbIcon,
            id: 1
        },
        {
            title: "Total Messenger Opt-in Users",
            number: cardValues.optInUsers,
            logo: mesIcon,
            id: 2
        },
        {
            title: "Total Orders",
            number: cardValues.totalOrders,
            logo: phIcon,
            id: 3
        },
        {
            title: "Total Net Sales",
            number: cardValues.toalNetSales,
            logo: moneyIcon,
            id: 4
        },
        {
            title: "Average Order Value (%)",
            number: cardValues.orderValue,
            logo: moneyIcon,
            id: 5
        }
    ];

    //------------------------------------------------------------------
    //When date range changes, fire this effect to update graph and cards
    //------------------------------------------------------------------
    useEffect(() => {
        const dates = dateRange.split("-");
        let cardData = oneDayData;

        const start = dates[0]; //Format = December 16,2020
        const end = dates[1]; //Format = December 16,2020

        const _end = moment(end).format("DD-MM-YY"); //Format = 16-12-20
        let active = "";

        let dateLabels = [];

        //Used != instead of !== because we want implicit coercion
        for (let i = 0; active != _end; i++) {
            const currentDate = moment(start).add(i, "days").format("DD-MM-YY");
            dateLabels.push(moment(currentDate, "DD-MM-YY").format("MMMM D, YYYY"));
            active = currentDate;
        }

        if (dateLabels.length === 7) {
            cardData = sevenDaysData;
        }

        if (dateLabels.length === 30) {
            cardData = thirtyDaysData;
        }

        if (dateLabels.length > 30) {
            cardData = moreData;
        }

        if (dateLabels.length === 1) {
            dateLabels = ["", ...dateLabels, "", "", "", "", ""];
            cardData = oneDayData;
        }

        setGraphDateLabels(dateLabels);

        setCardValues((prevState) => {
            const { facebookFans, optInUsers, totalOrders, toalNetSales, orderValue } = cardData;
            return {
                ...prevState,
                facebookFans,
                optInUsers,
                totalOrders,
                toalNetSales,
                orderValue
            };
        });
    }, [dateRange]);

    //------------------------------------------------------------------
    //Just to show a nice loader on the page for 3 seconds 😁
    //------------------------------------------------------------------
    useEffect(() => {
        setTimeout(() => {
            setDisplayLoader(false);
        }, 3000);
    }, []);

    return (
        <div id="dashboard-page">
            {/* Loader */}
            {displayLoader && <SiteLoader />}
            <div className="dashboard-page">
                {/* Sidebar */}
                <Sidebar isSidebarOpen={isSidebarOpen} />

                {/* Backdrop */}
                <div className={isSidebarOpen ? "backdrop show" : "backdrop"} onClick={handleToggleSidebar}></div>

                {/* Hamburger */}
                <Hamburger handleToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
                <main className="content">
                    {/* Navbar */}
                    <Navbar />
                    <div className="dashboard-details">
                        {/* Date Picker */}
                        <DateDisplay
                            ranges={ranges}
                            handleDateChanged={handleDateChanged}
                            dateRange={dateRange}
                            startDate={initialStartDate}
                            endDate={initialEndDate}
                        />

                        {/* Cards */}
                        <section className="dashboard-details__cards-wrapper">
                            {CARD_INFO.map((item) => {
                                const { title, number, logo, id } = item;
                                return (
                                    <div className="card" key={id}>
                                        <h4 className="card__title">{title}</h4>
                                        <div className="card__details">
                                            <h1>{number}</h1>
                                            <div className="logo-wrapper">
                                                <img src={logo} alt="" />
                                            </div>
                                        </div>
                                        <img src={infoIcon} alt="" className="card__info-icon" />
                                    </div>
                                );
                            })}
                        </section>

                        {/* Column Graphs */}
                        <section className="dashboard-details__graphs-wrapper">
                            <MessengerGraph dateLabels={graphDateLabels} />
                            <SalesGraph dateLabels={graphDateLabels} />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
