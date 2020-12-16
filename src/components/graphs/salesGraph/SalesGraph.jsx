import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import "./SalesGraph.scss";

import { valuesFromLabels } from "../GraphUitls";

const SalesGraph = ({ dateLabels }) => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: "apexchart-example"
        },

        yaxis: {
            min: 0,
            max: 1600
        },
        xaxis: {
            categories: dateLabels
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            colors: ["#15113B", "#09D5B0"]
        }
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: "Gross sales",
            data: valuesFromLabels(0, 1600, dateLabels)
        },
        {
            name: "Net Sales",
            data: valuesFromLabels(0, 1600, dateLabels)
        }
    ]);

    useEffect(() => {
        setChartOptions((prevState) => {
            return {
                ...prevState,
                xaxis: {
                    categories: dateLabels
                }
            };
        });

        setChartSeries((prevState) => {
            return [
                {
                    name: "Gross sales",
                    data: valuesFromLabels(0, 1600, dateLabels)
                },
                {
                    name: "Net Sales",
                    data: valuesFromLabels(0, 1600, dateLabels)
                }
            ];
        });
    }, [dateLabels]);
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
