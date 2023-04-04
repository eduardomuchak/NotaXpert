import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartContainer } from "../ChartContainer";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    datalabels: {
      color: 'white',
      display: function(context: any) {
        return context.dataset.data;
      },
      font: {
        weight: 'bold'
      },
      formatter: Math.round
    },
    legend: {
      display: true,
      position: "bottom" as "bottom",
      labels: {
        boxWidth: 20,
        boxHeight: 20,
        padding: 16,
        font: {
          size: 16,
          family: "sanofiSansRegular",
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      display: false,
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      display: true,
    },
  },
};

export const data = {
  labels: ["VIMs"],
  datasets: [
    {
      label: "Backlog",
      data: [2.81],
      backgroundColor: ["#22004C"],
      borderRadius: [32],
    },
    {
      label: "Em tratamento",
      data: [3.58],
      backgroundColor: ["#525CA3"],
      borderRadius: [32],
    },
    {
      label: "Com solicitante",
      data: [4.38],
      backgroundColor: ["#BE006B"],
      borderRadius: [32],
    },
    {
      label: "Regras",
      data: [2.81],
      backgroundColor: ["#CF483E"],
      borderRadius: [32],
    },
    {
      label: "Completos",
      data: [3.58],
      backgroundColor: ["#478040"],
      borderRadius: [32],
    },
  ],
};

export function BarChart() {
  return (
    <ChartContainer chartTitle="Volumetria de VIMs">
      <Bar options={options} data={data} />
    </ChartContainer>
  );
}
