"use client";

import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartTwoState {
    series: number[];
}

const DonutChart = ({ minerals, width }: { width: number; minerals: { gold: number, uranium: number, diamonds: number, coal: number } }) => {
    const options: ApexOptions = {
        colors: ["#ff9f0f", "#3C50E0", '#b30000', 'gray'],
        chart: {
            fontFamily: "Satoshi, sans-serif",
            type: "pie",
            height: 335,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        responsive: [
            {
                breakpoint: 1536,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            columnWidth: "25%",
                        },
                    },
                },
            },
        ],
        dataLabels: { enabled: true },
        labels: ['gold', 'uranium', 'diamonds', 'coal'],
        legend: {
            position: "top",
            horizontalAlign: "center",
            fontFamily: "Satoshi",
            fontWeight: 500,
            fontSize: "14px",
            itemMargin: { horizontal: 24 },
            markers: {

            },
        },
        fill: {
            opacity: 1,
        },
    };

    const [state, setState] = useState<ChartTwoState>({
        series: [minerals.gold, minerals.uranium, minerals.diamonds, minerals.coal]
    });

    const handleReset = () => {
        setState((prevState) => ({
            ...prevState,
        }));
    };
    handleReset;


    return (
        <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            <div className="mb-4 justify-between gap-4 sm:flex">
                <div>
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Minerals Mined
                    </h4>
                </div>
            </div>

            <div className=' flex flex-col items-center w-full'>
                <ReactApexChart
                    options={options}
                    series={state.series}
                    width={width}
                    type="pie"
                />
            </div>
        </div>
    );
};

export default DonutChart;