import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { ChartContainer } from '../ChartContainer';

import { options } from './options';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export interface LineChartProps {
  title: string;
  data: LineChartData[];
}

type LineChartData = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  pointRadius: number;
};

export function LineChart(props: LineChartProps) {
  const data = {
    labels: ['1d', '7d', '15d', '21d', '30d'],
    datasets: props.data,
  };

  return (
    <ChartContainer chartTitle={props.title}>
      <Line data={data} options={options}></Line>
    </ChartContainer>
  );
}
