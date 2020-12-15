import React, { memo } from "react";

import "./Hamburger.scss";

const Hamburger = ({ handleToggleSidebar, isSidebarOpen }) => {
    return (
        <div
            className={isSidebarOpen ? "hamburger-component close" : "hamburger-component"}
            onClick={handleToggleSidebar}
        >
            <div className="hamburger-component__rows"></div>
            <div className="hamburger-component__box"></div>
        </div>
    );
};

export default memo(Hamburger);
