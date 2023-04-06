import { ChartContainer } from 'presentation/components/ChartContainer';
import { PieChart } from 'presentation/components/PieChart';
import { colors } from 'presentation/components/PieChart/colors';
import { PieChartComponent } from 'presentation/components/PieChart/interface';

const mockData: PieChartComponent.Data[] = [
  {
    value: 20,
    label: 'VIMs Processados com sucesso',
  },
  {
    value: 5,
    label: 'VIMs não resolvidos',
  },
  {
    value: 75,
    label: 'VIMs não resolvidos vencidos',
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

export function PorcentagemDeVIMsCompletosEIncompletos() {
  return (
    <ChartContainer chartTitle="Porcentagem de VIMs completos e incompletos">
      <PieChart data={data} />
    </ChartContainer>
  );
}
