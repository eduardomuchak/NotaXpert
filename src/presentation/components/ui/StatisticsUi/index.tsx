import { BarChart } from 'presentation/components/BarChart';
import { GrayBackgroundContainer } from 'presentation/components/GrayBackgroundContainer';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';
import {
  errorData,
  formattedData,
  data,
} from 'presentation/components/BarChart/chartData';
import { LineChart } from 'presentation/components/LineChart';
import {
  lineChartData1,
  lineChartData2,
} from 'presentation/components/LineChart/mocks';

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
        <LineChart title="VIMs" data={lineChartData1} />
        <LineChart title="VIMs" data={lineChartData2} />
        <BarChart chartData={data}></BarChart>
        <BarChart chartData={formattedData}></BarChart>
        <TempoMedioProcessamentoCompletoVIM />
      </GrayBackgroundContainer>
      <div className="bg-sanofiGray px-6 pb-6 md:px-8 md:pb-8 flex flex-col gap-8">
        <div className="flex flex-row w-full">
          <BarChart chartData={errorData}></BarChart>
        </div>
        <ComparacaoDeVolumeDeRegras />
      </div>
    </>
  );
}
