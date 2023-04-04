import { ChartContainer } from 'presentation/components/ChartContainer';
import { LineChart } from 'presentation/components/LineChart';
import { StatisticsContainer } from 'presentation/components/StatisticsContainer';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';

export function StatisticsUi() {
  return (
    <PageContainer>
      <PageTitle>Estatísticas</PageTitle>
      <div className="w-full flex gap-6">
        <ChartContainer chartTitle="Teste">
          <span>Gráfico aqui</span>
        </ChartContainer>

        <StatisticsContainer title="Teste">
          <span>Info aqui</span>
        </StatisticsContainer>
      </div>
    </PageContainer>
  );
}
