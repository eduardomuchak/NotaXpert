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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const mock = [120, 90, 120, 30, 60, 120, 30, 60, 30, 30, 150, 30];
const radarChartLabels = [
  '1 - Número do pedido inválido ou não informado',
  '2 - Validação NCM XML',
  '3 - Processar fatura com OCR',
  '4 - Inconsistência filial Nota Fiscal x Pedido de Compras',
  '5 - Recebimento divergente do valor total da NF',
  '6 - CPF/CNPJ do fornecedor divergente do Pedido de Compras',
  '7 - Aguardando entrada DANFE',
  '8 - Código de fornecedor VIM diferente de PO',
  '9 - Suspeita de duplicidade',
  '10 - Moeda não coincide com a informada no PO',
  '11 - Falta de informação obrigatória',
  '12 - Fornecedor bloqueado para pagamento',
];

const options = {
  responsive: true,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 20,
      bottom: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => {
          return radarChartLabels[context[0].dataIndex];
        },
        label: (context: any) => {
          return `${context.dataset.data[context.dataIndex]} VIMs`;
        },
      },
    },
  },
  scales: {
    r: {
      angleLines: {
        display: true,
        // color: '#22004C',
      },
      grid: {
        // color: '#22004C',
        circular: true,
      },
      pointLabels: {
        font: {
          size: 20,
          weight: 'normal',
        },
        color: '#000000',
      },
      ticks: {
        maxTicksLimit: 5,
        stepSize: 50,
        font: {
          size: 14,
          weight: 'normal',
        },
        color: '#808080',
        z: 1,
        backdropColor: 'rgba(255, 255, 255, 0.0)',
      },
    },
  },
  elements: {
    line: {
      tension: 0,
    },
    point: {
      radius: 4,
      pointStyle: 'circle',
      hoverRadius: 6,
      hoverBorderWidth: 3,
    },
  },
};

export const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  datasets: [
    {
      data: mock,
      backgroundColor: 'rgba(224, 184, 181, 0.8)',
      borderColor: 'rgba(207, 72, 62, 1)',
      borderWidth: 2,
    },
  ],
};

export function RadarChart() {
  return <Radar data={data} options={options} />;
}
