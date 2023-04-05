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
  allVIMs: boolean;
}

type LineChartData = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  pointRadius: number;
};

export function LineChart(props: LineChartProps) {
  const options = {
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 50,
        top: 0,
        bottom: 0,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'start' as const,
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          color: 'black',
          font: {
            size: 16,
          },
        },
      },
      labels: {
        color: 'black',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      datalabels: {
        anchor: 'end' as const,
        align: 'right' as const,
        offset: 5,
        clamp: true,
        color: (context: any) => {
          return context.dataset.backgroundColor;
        },
        font: {
          size: 14,
          family: 'sanofiSansRegular',
        },
        formatter: (_value: number, context: any) => {
          const dataset = context.dataset.data[context.dataset.data.length - 1];
          if (_value === dataset) {
            return dataset;
          } else {
            return null;
          }
        },
      },
    },
    scales: {
      x: {
        display: props.allVIMs,
        ticks: {
          color: 'black',
        },
        grid: {
          color: 'rgba(0, 0, 0, 1)',
          display: props.allVIMs,
        },
      },
      y: {
        ticks: {
          color: 'black',
        },
        grid: {
          color: 'rgba(0, 0, 0, 1)',
          display: false,
        },
      },
    },
  };

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
