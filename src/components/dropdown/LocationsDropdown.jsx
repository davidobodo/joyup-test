import React, { memo } from "react";

import "./LocationsDropdown.scss";

const LocationsDropdown = ({ isDropdownOpen, handleToggleDropdown }) => {
    console.log(isDropdownOpen);
    return (
        <div className={isDropdownOpen ? "locations-dropdown is-open" : "locations-dropdown"}>
            <div className="locations-dropdown__header" onClick={handleToggleDropdown}>
                Location
                <div className="arrow"></div>
            </div>
            <ul className="locations-dropdown__options">
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
    );
};

export default memo(LocationsDropdown);
