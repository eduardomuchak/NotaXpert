import { ChartContainer } from 'presentation/components/ChartContainer';
import { PieChart } from 'presentation/components/PieChart';
import { colors } from 'presentation/components/PieChart/colors';
import { PieChartComponent } from 'presentation/components/PieChart/interface';

const mockData: PieChartComponent.Data[] = [
  {
    value: 34,
    label: '15-30 dias',
  },
  {
    value: 55,
    label: '30-45 dias',
  },
  {
    value: 99,
    label: '45-60 dias',
  },
  {
    value: 56,
    label: '60-90 dias',
  },
];

const data = {
  labels: mockData.map((item) => item.label),
  datasets: [
    {
      data: mockData.map((item) => item.value),
      backgroundColor: colors,
      borderColor: colors,
    },
  ],
};

export function AtrasoDeVIMs() {
  return (
    <ChartContainer chartTitle="Atraso de VIMs">
      <PieChart data={data} />
    </ChartContainer>
  );
}
