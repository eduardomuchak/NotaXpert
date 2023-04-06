import { GrayBackgroundContainer } from 'presentation/components/GrayBackgroundContainer';
// import { StatisticsContainer } from 'presentation/components/StatisticsContainer';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';

import { ComparacaoDeVolumeDeRegras } from './ComparacaoDeVolumeDeRegras';
import { PorcentagemDeVIMsCompletosEIncompletos } from './PorcentagemDeVIMsCompletosEIncompletos';
import { AtrasoDeVIMs } from './AtrasoDeVIMs';

export function StatisticsUi() {
  return (
    <>
      <PageContainer>
        <PageTitle>Estatísticas</PageTitle>
      </PageContainer>
      <GrayBackgroundContainer>
        {/* <StatisticsContainer title="76%">
          <span className="text-2xl font-sanofiSansBold">
            de todos os VIMs foram processados antes do vencimento
          </span>
        </StatisticsContainer>
        <StatisticsContainer title="1d04h23min">
          <span className="text-2xl font-sanofiSansBold">
            foi o tempo médio de processamento completo de um VIM
          </span>
        </StatisticsContainer>
        
        
        <StatisticsContainer title="2d">
          <span className="text-2xl font-sanofiSansBold">
            capacidade de processamento
          </span>
        </StatisticsContainer> */}
        <PorcentagemDeVIMsCompletosEIncompletos />
        <AtrasoDeVIMs />
        <ComparacaoDeVolumeDeRegras />
      </GrayBackgroundContainer>
    </>
  );
}
