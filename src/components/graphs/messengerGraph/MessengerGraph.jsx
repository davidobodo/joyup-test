import React, { useState, memo, useEffect } from "react";
import Chart from "react-apexcharts";

import "./MessengerGraph.scss";

import { valuesFromLabels } from "../GraphUitls";

const MessengerGraph = ({ dateLabels }) => {
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
        }
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: "subscribes",
            data: valuesFromLabels(230, 330, dateLabels)
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
                    name: "Subscribes",
                    data: valuesFromLabels(230, 330, dateLabels)
                }
            ];
        });
    }, [dateLabels]);

    return (
        <div className="messenger-graph">
            <h4 className="messenger-graph__title">Active Messenger Subscribers</h4>
            <div className="messenger-graph__content">
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

export default memo(MessengerGraph);
