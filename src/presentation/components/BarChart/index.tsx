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
import { options } from "./chartOptions";
import { Bar } from "react-chartjs-2";
import { ChartContainer } from "../ChartContainer";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

type chartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderRadius: number[];
  }[];
};
interface BarChartProps {
  chartData: chartData;
}

export function BarChart(props: BarChartProps) {
  return (
    <ChartContainer chartTitle="Volumetria de VIMs">
      <Bar options={options} data={props.chartData} />
    </ChartContainer>
  );
}
