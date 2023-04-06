import { StatisticsContainer } from 'presentation/components/StatisticsContainer';

export function PorcentagemProcessamentoVIMsAntesDoVencimento() {
  return (
    <StatisticsContainer title="76%">
      <span className="text-lg md:text-2xl font-sanofiSansBold">
        de todos os VIMs foram processados antes do vencimento
      </span>
    </StatisticsContainer>
  );
}
