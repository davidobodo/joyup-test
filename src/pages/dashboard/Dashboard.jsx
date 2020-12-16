import React, { useRef, useState, useCallback, useEffect } from "react";
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

const initialStartDate = moment();
const initialEndDate = moment();
// const initialEndDate = moment().add(29, "days");

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
    //Helpers
    //------------------------------------------------------------------

    //------------------------------------------------------------------
    //States
    //------------------------------------------------------------------
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [dateRange, setDateRange] = useState(
        initialStartDate.format("MMMM D, YYYY") + " - " + initialEndDate.format("MMMM D, YYYY")
    );
    const [graphDateLabels, setGraphDateLabels] = useState([moment().format("DD-MM-YY")]);
    const [displayLoader, setDisplayLoader] = useState(true);

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
    const CARD_INFO = useRef([
        {
            title: "Total Facebook Fans",
            number: "200",
            logo: fbIcon,
            id: 1
        },
        {
            title: "Total Messenger Opt-in Users",
            number: "230",
            logo: mesIcon,
            id: 2
        },
        {
            title: "Total Orders",
            number: "320",
            logo: phIcon,
            id: 3
        },
        {
            title: "Total Net Sales",
            number: "$812.14",
            logo: moneyIcon,
            id: 4
        },
        {
            title: "Average Order Value (%)",
            number: "278.42",
            logo: moneyIcon,
            id: 5
        }
    ]).current;

    useEffect(() => {
        const dates = dateRange.split("-");

        const start = dates[0]; //Format = December 16,2020
        const end = dates[1]; //Format = December 16,2020

        const _start = moment(start).format("DD-MM-YY"); //Format = 16-12-20
        const _end = moment(end).format("DD-MM-YY"); //Format = 16-12-20
        let active = "";

        console.log(moment(_end, "DD-MM-YY").format("MMMM D, YYYY"), "the end");

        let dateLabels = [];

        for (let i = 0; active != _end; i++) {
            const currentDate = moment(start).add(i, "days").format("DD-MM-YY");
            dateLabels.push(moment(currentDate, "DD-MM-YY").format("MMMM D, YYYY"));
            active = currentDate;
        }

        if (dateLabels.length === 1) {
            dateLabels = ["", ...dateLabels, "", "", "", "", ""];
        }

        setGraphDateLabels(dateLabels);
    }, [dateRange]);

    useEffect(() => {
        setTimeout(() => {
            setDisplayLoader(false);
        }, 3000);
    }, []);

    return (
        <div id="dashboard-page">
            {displayLoader && <SiteLoader />}
            <div className="dashboard-page">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <div className={isSidebarOpen ? "backdrop show" : "backdrop"} onClick={handleToggleSidebar}></div>
                <Hamburger handleToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
                <main className="content">
                    <Navbar />
                    <div className="dashboard-details">
                        <DateDisplay
                            ranges={ranges}
                            handleDateChanged={handleDateChanged}
                            dateRange={dateRange}
                            startDate={initialStartDate}
                            endDate={initialEndDate}
                        />
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
