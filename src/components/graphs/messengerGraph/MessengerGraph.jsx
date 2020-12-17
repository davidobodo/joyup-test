import React, { useState, memo, useEffect } from "react";
import Chart from "react-apexcharts";

import "./MessengerGraph.scss";

import { valuesFromLabels } from "../GraphUitls";

const MessengerGraph = ({ dateLabels }) => {
    //------------------------------------------------------------------
    //States
    //------------------------------------------------------------------
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: "apexchart-example"
        },
        yaxis: {
            min: 230,
            max: 330
        },
        xaxis: {
            categories: dateLabels
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            colors: ["#09D5B0"]
        },
        legend: {
            show: true,
            position: "top",
            markers: {
                radius: 0,
                width: 21,
                height: 9,
                fillColors: ["#09D5B0"]
            }
        }
    });
    const [chartSeries, setChartSeries] = useState([
        {
            name: "#Daily Messenger Subscribes (Cumulative)",
            data: valuesFromLabels(230, 330, dateLabels)
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
                    name: "#Daily Messenger Subscribes (Cumulative)",
                    data: valuesFromLabels(230, 330, dateLabels)
                }
            ];
        });
    }, [dateLabels]);

    return (
        <div className="messenger-graph">
            <h4 className="messenger-graph__title">Active Messenger Subscribers</h4>
            <div className="messenger-graph__custom-legend">
                <span></span>
                #Daily Messenger Subscribes (Cumulative)
            </div>
            <div className="messenger-graph__content">
                <Chart options={chartOptions} series={chartSeries} type="bar" width="100%" height="100%" />
            </div>
        </div>
    );
};

export default memo(MessengerGraph);
