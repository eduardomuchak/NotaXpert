import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as 'bottom',
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          // Get all the values of the current dataset and show the percentage of each value
          const dataset = context.dataset.data;
          const total = dataset.reduce(
            (previousValue: any, currentValue: any) => {
              return previousValue + currentValue;
            },
          );
          const currentValue = dataset[context.dataIndex];
          const percentage = Math.floor((currentValue / total) * 100 + 0.5);
          return percentage + '%';
        },
      },
    },
  },
};

const data = {
  labels: [
    'Vims Processados com sucesso',
    'VIMs não resolvidos ',
    'VIMs não resolvidos vencidos',
  ],
  datasets: [
    {
      data: [75, 20, 5],
      backgroundColor: ['#22004C', '#BE006B', '#525CA3'],
      borderWidth: 1,
      borderColor: ['#22004C', '#BE006B', '#525CA3'],
    },
  ],
};

export function PieChart() {
  return <Pie options={options} data={data} />;
}
