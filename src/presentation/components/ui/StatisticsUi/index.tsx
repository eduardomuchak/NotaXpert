import { ChartContainer } from 'presentation/components/ChartContainer';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';

export function StatisticsUi() {
  return (
    <PageContainer>
      <PageTitle>Estatísticas</PageTitle>
      <ChartContainer chartTitle="Teste">
        <span>Gráfico aqui</span>
      </ChartContainer>
    </PageContainer>
  );
}
