import React, { useRef, useState, useCallback } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";
import DateDisplay from "../../components/dateDisplay/DateDisplay";
import MessengerGraph from "../../components/graphs/messengerGraph/MessengerGraph";
import SalesGraph from "../../components/graphs/salesGraph/SalesGraph";
import useDropdown from "../../components/customHooks/useDropdown";

import fbIcon from "../../assets/facebook.svg";
import mesIcon from "../../assets/messenger.svg";
import phIcon from "../../assets/phone.svg";
import moneyIcon from "../../assets/money.svg";
import infoIcon from "../../assets/info.svg";

import "./Dashboard.scss";
const DashboardPage = () => {
    //------------------------------------------------------------------
    //Helpers
    //------------------------------------------------------------------
    const { isDropdownOpen, handleToggleDropdown } = useDropdown();

    //------------------------------------------------------------------
    //States
    //------------------------------------------------------------------
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //------------------------------------------------------------------
    //Toggle the display of the sidebar
    //------------------------------------------------------------------
    const handleToggleSidebar = useCallback(() => {
        setIsSidebarOpen(!isSidebarOpen);
    }, [isSidebarOpen]);

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
    return (
        <div id="dashboard-page">
            <div className="dashboard-page">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <div className={isSidebarOpen ? "backdrop show" : "backdrop"} onClick={handleToggleSidebar}></div>
                <Hamburger handleToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
                <main className="content">
                    <Navbar />
                    <div className="dashboard-details">
                        <DateDisplay isDropdownOpen={isDropdownOpen} handleToggleDropdown={handleToggleDropdown} />
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
                            <MessengerGraph />
                            <SalesGraph />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
