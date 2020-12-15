import React from "react";

import "./DateDisplay.scss";
const DateDisplay = ({ isDropdownOpen, handleToggleDropdown }) => {
    console.log(isDropdownOpen, "DHSJDHJ");
    return (
        <div className={isDropdownOpen ? "date-display-component is-open" : "date-display-component"}>
            <h4 className="date-display-component__header" onClick={handleToggleDropdown}>
                Decembar 3, 2020 - December 9, 2020
            </h4>
            <ul className="date-display-component__options">
                <li>Today</li>
                <li>Yesterday</li>
                <li>Last 7 Days</li>
                <li>Last 30 Days</li>
                <li>This Month</li>
                <li>Last Month</li>
                <li>Custom Range</li>
            </ul>
        </div>
    );
};

export default DateDisplay;
