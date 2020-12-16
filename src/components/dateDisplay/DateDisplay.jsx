import React, { useState } from "react";
import moment from "moment";
import { LinkedCalendar } from "rb-datepicker";
import DateRangePicker from "react-bootstrap-daterangepicker";
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
    const onDatesChange = (e, picker) => {
        setDateRange(picker.startDate.format("MMMM D, YYYY") + " - " + picker.endDate.format("MMMM D, YYYY"));
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
        <div className="date-display-component">
            <DateRangePicker
                initialSettings={{
                    startDate: "1/1/2014",
                    endDate: "3/1/2014",
                    ranges: ranges
                }}
                onDatesChange={onDatesChange}
                onApply={onDatesChange}
            >
                <h4 className="date-display-component__header">{dateRange}</h4>
            </DateRangePicker>
        </div>
    );
};

export default DateDisplay;
