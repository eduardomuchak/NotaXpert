import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { options } from './options';
import { PieChartComponent } from './interface';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export function PieChart({ data }: PieChartComponent.PieChartProps) {
  return <Pie options={options} data={data} />;
}
