import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options = {
  responsive: true,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 40,
      bottom: 0,
    },
  },
  plugins: {
    legend: {
      position: 'bottom' as 'bottom',
      labels: {
        font: {
          size: 16,
          family: 'sanofiSansRegular',
          weight: 'bold' as 'bold',
        },
        boxWidth: 20,
        boxHeight: 20,
        padding: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          // Get all the values of the current dataset and show the percentage of each value
          const dataset = context.dataset.data;
          const total = dataset.reduce(
            (previousValue: number, currentValue: number) => {
              return previousValue + currentValue;
            },
          );
          const currentValue = dataset[context.dataIndex];
          const percentage = Math.floor((currentValue / total) * 100 + 0.5);
          return ` ${currentValue} VIMs - ${percentage}%`;
        },
      },
    },
    datalabels: {
      color: (context: any) => {
        return context.dataset.backgroundColor;
      },
      font: {
        size: 20,
        family: 'sanofiSansRegular',
        weight: 'bold' as 'bold',
      },
      formatter: (_value: number, context: any) => {
        // Get all the values of the current dataset and show the percentage of each value
        const dataset = context.dataset.data;
        const total = dataset.reduce(
          (previousValue: number, currentValue: number) => {
            return previousValue + currentValue;
          },
        );
        const currentValue = dataset[context.dataIndex];
        const percentage = Math.floor((currentValue / total) * 100 + 0.5);
        return `${percentage}%`;
      },
      anchor: 'end' as 'end',
      align: 'end' as 'end',
      offset: 10,
      clamp: true,
    },
  },
};

const data = {
  labels: [
    'VIMs Processados com sucesso',
    'VIMs não resolvidos ',
    'VIMs não resolvidos vencidos',
  ],
  datasets: [
    {
      data: [20, 5, 75],
      backgroundColor: ['#525CA3', '#BE006B', '#22004C'],
      borderColor: ['#525CA3', '#BE006B', '#22004C'],
    },
  ],
};

export function PieChart() {
  return (
    <div className="">
      <Pie options={options} data={data} />
    </div>
  );
}
