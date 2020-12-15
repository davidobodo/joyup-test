import React from "react";

import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__left-column">
                <div className="dropdown">
                    <div className="dropdown__header">
                        Location
                        <div className="arrow"></div>
                    </div>
                    <ul className="dropdown__options">
                        <li>BOBASHOP</li>
                        <li>Anton’s Pizza &amp; Burgers</li>
                        <li>Bamboo Asia- 1221 boardway</li>
                        <li>Bamboo Asia- 311 California St</li>
                        <li>Bamboo Asia- 41 Montgomey St, SF</li>
                        <li>Bamboo Asia 98 7th st, SF</li>
                        <li>Choice Market- Denver</li>
                        <li>Cold Stone Creamery #20738</li>
                        <li>Cold Stone Creamery - Lockport IL</li>
                    </ul>
                </div>
            </div>
            <div className="navbar__right-column">
                <button className="btn btn-white">Menu Preview</button>
                <button className="btn btn-yellow">Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
