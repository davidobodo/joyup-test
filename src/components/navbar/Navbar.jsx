import React, { useCallback, useState } from "react";

import LocationsDropdown from "../dropdown/LocationsDropdown";

import useDropdown from "../customHooks/useDropdown";
import "./Navbar.scss";

const Navbar = () => {
    const { isDropdownOpen, handleToggleDropdown } = useDropdown();

    return (
        <nav className="navbar">
            <div className="navbar__left-column">
                <LocationsDropdown isDropdownOpen={isDropdownOpen} handleToggleDropdown={handleToggleDropdown} />
            </div>
            <div className="navbar__right-column">
                <button className="btn btn-white">Menu Preview</button>
                <button className="btn btn-yellow">Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
