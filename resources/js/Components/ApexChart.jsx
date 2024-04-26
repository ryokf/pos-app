import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

function ApexChart({ profitPerMonth }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [options, setOptions] = useState({
        colors : ['#ACC4AB'],
        dataLabels: {
            style: {
                colors: ['#A9907E']
            }
        },
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"]
        }, dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
        },
        fill: {
            colors: ['#ACC4AB'],
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
    });
    const [series, setSeries] = useState([
        {
            name: "keuntungan",
            data: profitPerMonth
        }
    ]);

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart h-96">
                    <Chart
                        options={options}
                        series={series}
                        type="area"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
}

export default ApexChart;
