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
                    <section className="dashboard-details"></section>
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
