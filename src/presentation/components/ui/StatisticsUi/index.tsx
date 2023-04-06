import { GrayBackgroundContainer } from 'presentation/components/GrayBackgroundContainer';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';

import { ComparacaoDeVolumeDeRegras } from './charts/ComparacaoDeVolumeDeRegras';
import { PorcentagemDeVIMsCompletosEIncompletos } from './charts/PorcentagemDeVIMsCompletosEIncompletos';
import { AtrasoDeVIMs } from './charts/AtrasoDeVIMs';
import { TempoMedioProcessamentoCompletoVIM } from './statistics/TempoMedioProcessamentoCompletoVIM';
import { TempoCapacidadeProcessamento } from './statistics/TempoCapacidadeProcessamento';
import { PorcentagemProcessamentoVIMsAntesDoVencimento } from './statistics/PorcentagemProcessamentoVIMsAntesDoVencimento';

export function StatisticsUi() {
  return (
    <>
      <PageContainer>
        <PageTitle>Estatísticas</PageTitle>
      </PageContainer>
      <GrayBackgroundContainer>
        <PorcentagemProcessamentoVIMsAntesDoVencimento />
        <TempoCapacidadeProcessamento />
        <PorcentagemDeVIMsCompletosEIncompletos />
        <AtrasoDeVIMs />
        <ComparacaoDeVolumeDeRegras />
        <TempoMedioProcessamentoCompletoVIM />
      </GrayBackgroundContainer>
    </>
  );
}
