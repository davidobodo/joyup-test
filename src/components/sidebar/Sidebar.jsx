import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";
import house from "../../assets/sidebar/house.svg";
import hierarchy from "../../assets/sidebar/heirarchy.svg";
import bag from "../../assets/sidebar/bag.svg";
import calendar from "../../assets/sidebar/calendar.svg";
import pyramid from "../../assets/sidebar/pyramid.svg";
import users from "../../assets/sidebar/users.svg";
import cart from "../../assets/sidebar/cart.svg";
import settings from "../../assets/sidebar/settings.svg";

const Sidebar = ({ isSidebarOpen }) => {
    return (
        <>
            <aside className={isSidebarOpen ? "sidebar is-open" : "sidebar"}>
                <div className="sidebar__header">
                    <img src={logo} alt="" />
                </div>
                <div className="sidebar__links">
                    <NavLink to="/" exact>
                        <img src={house} alt="" />
                        Dashboard
                    </NavLink>
                    <NavLink to="/business-settings" exact>
                        <img src={hierarchy} alt="" />
                        Business Settings
                    </NavLink>
                    <NavLink to="/products" exact>
                        <img src={bag} alt="" />
                        Products
                    </NavLink>
                    <NavLink to="/schedule-posts" exact>
                        <img src={calendar} alt="" />
                        Schedule Posts
                    </NavLink>
                    <NavLink to="/post-animator" exact>
                        <img src={pyramid} alt="" />
                        Post Animator
                    </NavLink>
                    <NavLink to="/messenger-users" exact>
                        <img src={users} alt="" />
                        Messenger Users
                    </NavLink>
                    <NavLink to="/order-history" exact>
                        <img src={cart} alt="" />
                        Order History
                    </NavLink>
                    <NavLink to="/messenger-settings" exact>
                        <img src={settings} alt="" />
                        Messenger Settings
                    </NavLink>
                </div>
            </aside>
            <div className={isSidebarOpen ? "backdrop show" : "backdrop"}></div>
        </>
    );
};

export default memo(Sidebar);
