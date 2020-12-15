import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__left-column">
                <div className="dropdown">Location</div>
            </div>
            <div className="navbar__right-column">
                <button className="btn btn-white">Menu Preview</button>
                <button className="btn btn-yellow">Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
