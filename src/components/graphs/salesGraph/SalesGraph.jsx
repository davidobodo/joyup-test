import React, { useState } from "react";
import Chart from "react-apexcharts";

import "./SalesGraph.scss";

import {
    labelsForOneMonth,
    valuesForOneMonth,
    labelsForOneWeek,
    secondValuesForOneMonth,
    firstValuesForOneMonth
} from "../GraphUitls";

const SalesGraph = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: "apexchart-example"
        },

        yaxis: {
            min: 0,
            max: 1600
        },
        xaxis: {
            //----------------------
            //labels for 1 day
            //----------------------
            // categories: ["", "Today", , , , ,],
            //----------------------
            //labels for 7 days
            //----------------------
            // categories: labelsForOneWeek()
            //----------------------
            //labels for one month
            //----------------------
            categories: labelsForOneMonth()
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            colors: ["#15113B", "#09D5B0"]
        }
    });

    const [chartSeries, setChartSeries] = useState([
        //----------------------
        //Value for one day
        //----------------------
        // {
        //     name: "series-1",
        //     data: ["", 550, , , , ,]
        // },
        // {
        //     name: "series-1",
        //     data: ["", 280, , , , ,]
        // }
        //----------------------
        //Value for 7 days
        //----------------------
        // {
        //     name: "series-1",
        //     data: [700, 500, 400, 700, 950, 780, 820]
        // },
        // {
        //     name: "series-2",
        //     data: [380, 700, 570, 430, 450, 200, 500]
        // }
        //----------------------
        //Value for One Month
        //----------------------
        {
            name: "series-1",
            data: firstValuesForOneMonth()
        },
        {
            name: "series-2",
            data: secondValuesForOneMonth()
        }
    ]);
    return (
        <div className="sales-graph">
            <h4 className="sales-graph__title">Net Sales($)</h4>
            <div className="sales-graph__content">
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                    // width={500} height={320}
                />
            </div>
        </div>
    );
};

export default SalesGraph;
