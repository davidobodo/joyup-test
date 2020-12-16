import React, { useCallback, useState } from "react";

import LocationsDropdown from "../dropdown/LocationsDropdown";

import useDropdown from "../customHooks/useDropdown";
import "./Navbar.scss";

const Navbar = () => {
    const { isDropdownOpen, handleToggleDropdown } = useDropdown();

    return (
        <>
            <nav className="navbar-component">
                <div className="navbar-component__left-column">
                    <LocationsDropdown isDropdownOpen={isDropdownOpen} handleToggleDropdown={handleToggleDropdown} />
                </div>
                <div className="navbar-component__right-column">
                    <button className="btn btn-white">Menu Preview</button>
                    <button className="btn btn-yellow">Logout</button>
                </div>
            </nav>
            <nav className="navbar-component-position-fix">jkj</nav>
        </>
    );
};

export default Navbar;
