import React, { useState } from "react";
import moment from "moment";
import { LinkedCalendar } from "rb-datepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import "./DateDisplay.scss";
const DateDisplay = ({ isDropdownOpen, handleToggleDropdown }) => {
    const start = moment();
    const end = moment().add(29, "days");
    const [dateRange, setDateRange] = useState(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));

    //------------------------------------------------------------------
    //When date changes fire this function
    //------------------------------------------------------------------
    const onDatesChange = ({ startDate, endDate }) => {
        setDateRange(startDate.format("MMMM D, YYYY") + " - " + endDate.format("MMMM D, YYYY"));
    };

    const ranges = {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
    };
    return (
        <div className={isDropdownOpen ? "date-display-component is-open" : "date-display-component"}>
            <h4 className="date-display-component__header" onClick={handleToggleDropdown}>
                {dateRange}
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
            <LinkedCalendar
                onDatesChange={onDatesChange}
                showDropdowns={false}
                // startDate={start}
                // endDate={end}
                minDate={start}
                showWeekNumbers={false}
                showCustomRangeLabel={true}
                range={{
                    Today: [moment(), moment()],
                    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                    "Last 7 Days": [moment().subtract(6, "days"), moment()],
                    "Last 30 Days": [moment().subtract(29, "days"), moment()],
                    "This Month": [moment().startOf("month"), moment().endOf("month")],
                    "Last Month": [
                        moment().subtract(1, "month").startOf("month"),
                        moment().subtract(1, "month").endOf("month")
                    ]
                }}
                alwaysShowCalendars={true}
            />
        </div>
    );
};

export default DateDisplay;
