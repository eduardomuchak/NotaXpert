import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { options } from './options';
import { RadarChartComponent } from './interface';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export function RadarChart({ data }: RadarChartComponent.RadarChartProps) {
  return <Radar data={data} options={options} />;
}
