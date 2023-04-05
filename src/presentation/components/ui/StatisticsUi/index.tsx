import { ChartContainer } from 'presentation/components/ChartContainer';
import { GrayBackgroundContainer } from 'presentation/components/GrayBackgroundContainer';
// import { PieChart } from 'presentation/components/PieChart';
// import { colors } from 'presentation/components/PieChart/colors';
// import { PieChartComponent } from 'presentation/components/PieChart/interface';
import { RadarChart } from 'presentation/components/RadarChart';
// import { StatisticsContainer } from 'presentation/components/StatisticsContainer';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';

export function StatisticsUi() {
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
  // const mockData: PieChartComponent.Data[] = [
  //   {
  //     value: 20,
  //     label: 'VIMs Processados com sucesso',
  //   },
  //   {
  //     value: 5,
  //     label: 'VIMs não resolvidos',
  //   },
  //   {
  //     value: 75,
  //     label: 'VIMs não resolvidos vencidos',
  //   },
  // ];

  // const mockData2: PieChartComponent.Data[] = [
  //   {
  //     value: 34,
  //     label: '15-30 dias',
  //   },
  //   {
  //     value: 55,
  //     label: '30-45 dias',
  //   },
  //   {
  //     value: 99,
  //     label: '45-60 dias',
  //   },
  //   {
  //     value: 56,
  //     label: '60-90 dias',
  //   },
  // ];

  // const data = {
  //   labels: mockData.map((item) => item.label),
  //   datasets: [
  //     {
  //       data: mockData.map((item) => item.value),
  //       backgroundColor: colors,
  //       borderColor: colors,
  //     },
  //   ],
  // };

  // const data2 = {
  //   labels: mockData2.map((item) => item.label),
  //   datasets: [
  //     {
  //       data: mockData2.map((item) => item.value),
  //       backgroundColor: colors,
  //       borderColor: colors,
  //     },
  //   ],
  // };

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
        <ChartContainer chartTitle="Porcentagem de VIMs completos e incompletos">
          <PieChart data={data} />
        </ChartContainer>
        <ChartContainer chartTitle="Atraso de VIMs">
          <PieChart data={data2} />
        </ChartContainer>
        <StatisticsContainer title="2d">
          <span className="text-2xl font-sanofiSansBold">
            capacidade de processamento
          </span>
        </StatisticsContainer> */}

        <ChartContainer chartTitle="Comparação de Volume de regras">
          <div className="w-full flex flex-1 gap-14 flex-col xl:flex-row pt-4">
            <div className="w-full flex items-center justify-center">
              <RadarChart />
            </div>

            <div className="flex flex-col items-start justify-center gap-8 w-full">
              {radarChartLabels.map((label, index) => (
                <span key={`${label}-${index}`} className="text-sm">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </ChartContainer>
      </GrayBackgroundContainer>
    </>
  );
}
