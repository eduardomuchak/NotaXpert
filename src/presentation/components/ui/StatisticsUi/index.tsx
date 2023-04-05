import { ChartContainer } from 'presentation/components/ChartContainer';
import { GrayBackgroundContainer } from 'presentation/components/GrayBackgroundContainer';
import { PieChart } from 'presentation/components/PieChart';
import { colors } from 'presentation/components/PieChart/colors';
import { PieChartComponent } from 'presentation/components/PieChart/interface';
import { StatisticsContainer } from 'presentation/components/StatisticsContainer';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';

export function StatisticsUi() {
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

  const mockData2: PieChartComponent.Data[] = [
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

  const data2 = {
    labels: mockData2.map((item) => item.label),
    datasets: [
      {
        data: mockData2.map((item) => item.value),
        backgroundColor: colors,
        borderColor: colors,
      },
    ],
  };

  return (
    <>
      <PageContainer>
        <PageTitle>Estatísticas</PageTitle>
      </PageContainer>
      <GrayBackgroundContainer>
        <StatisticsContainer title="76%">
          <span className="text-2xl font-sanofiSansBold">
            de todos os VIMs foram processados antes do vencimento
          </span>
        </StatisticsContainer>
        <StatisticsContainer title="1d04h23min">
          <span className="text-2xl font-sanofiSansBold">
            foi o tempo médio de processamento completo de um VIM
          </span>
        </StatisticsContainer>
        <ChartContainer chartTitle="Porcentagem de VIMs completos e incompletos">
          <PieChart data={data} />
        </ChartContainer>
        <ChartContainer chartTitle="Atraso de VIMs">
          <PieChart data={data2} />
        </ChartContainer>
      </GrayBackgroundContainer>
    </>
  );
}
