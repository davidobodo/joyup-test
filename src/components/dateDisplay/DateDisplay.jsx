import React, { memo } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import "./DateDisplay.scss";
const DateDisplay = ({ ranges, handleDateChanged, dateRange, startDate, endDate }) => {
    return (
        <div className="date-display-component">
            <DateRangePicker
                initialSettings={{
                    startDate: startDate,
                    endDate: endDate,
                    ranges: ranges
                }}
                onApply={handleDateChanged}
            >
                <h4 className="date-display-component__header">{dateRange}</h4>
            </DateRangePicker>
        </div>
    );
};

export default memo(DateDisplay);
