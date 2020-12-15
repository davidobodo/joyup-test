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
                        <li>Antonios pizza and burger</li>
                        <li>Bamboo Asia </li>
                        <li>Bamboo Asia</li>
                        <li>Bamboo Asia</li>
                        <li>Choice Market</li>
                        <li>Cold Stone</li>
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
