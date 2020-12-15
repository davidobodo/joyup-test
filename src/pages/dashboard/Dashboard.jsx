import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./Dashboard.scss";
const DashboardPage = () => {
    return (
        <div id="dashboard-page">
            <div className="dashboard-page">
                <Sidebar />
                <main className="content">
                    <Navbar />
                    <div className="dashboard-details">
                        <section className="dashboard-details__date-wrapper">
                            <h4>Decembar 3, 2020 - December 9, 2020</h4>
                        </section>
                        <section className="dashboard-details__cards-wrapper"></section>
                        <section className="dashboard-details__graphs-wrapper"></section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
