import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import logo2 from "../../../assets/logo2.png";

import "./SalesGraph.scss";

import { valuesFromLabels } from "../GraphUitls";

const SalesGraph = ({ dateLabels }) => {
    //------------------------------------------------------------------
    //States
    //------------------------------------------------------------------
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
        },
        legend: {
            position: "top",
            markers: {
                radius: 0,
                width: 21,
                height: 9,
                fillColors: ["#15113B", "#09D5B0"]
            }
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

    //------------------------------------------------------------------
    //When dateLabels changes update state
    //------------------------------------------------------------------
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
                <Chart options={chartOptions} series={chartSeries} type="bar" width="100%" height="100%" />
            </div>
            <img src={logo2} alt="" className="logo" />
        </div>
    );
};

export default SalesGraph;
