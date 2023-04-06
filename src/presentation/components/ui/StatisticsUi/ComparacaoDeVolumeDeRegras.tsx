import { ChartContainer } from 'presentation/components/ChartContainer';
import { RadarChart } from 'presentation/components/RadarChart';
import { RadarChartComponent } from 'presentation/components/RadarChart/interface';

const mockData: RadarChartComponent.Data[] = [
  {
    value: 120,
    label: '1',
    tooltip: '1 - Número do pedido inválido ou não informado',
  },
  {
    value: 90,
    label: '2',
    tooltip: '2 - Validação NCM XML',
  },
  {
    value: 120,
    label: '3',
    tooltip: '3 - Processar fatura com OCR',
  },
  {
    value: 30,
    label: '4',
    tooltip: '4 - Inconsistência filial Nota Fiscal x Pedido de Compras',
  },
  {
    value: 60,
    label: '5',
    tooltip: '5 - Recebimento divergente do valor total da NF',
  },
  {
    value: 120,
    label: '6',
    tooltip: '6 - CPF/CNPJ do fornecedor divergente do Pedido de Compras',
  },
  {
    value: 30,
    label: '7',
    tooltip: '7 - Aguardando entrada DANFE',
  },
  {
    value: 60,
    label: '8',
    tooltip: '8 - Código de fornecedor VIM diferente de PO',
  },
  {
    value: 30,
    label: '9',
    tooltip: '9 - Suspeita de duplicidade',
  },
  {
    value: 30,
    label: '10',
    tooltip: '10 - Moeda não coincide com a informada no PO',
  },
  {
    value: 150,
    label: '11',
    tooltip: '11 - Falta de informação obrigatória',
  },
  {
    value: 30,
    label: '12',
    tooltip: '12 - Fornecedor bloqueado para pagamento',
  },
];

export const data = {
  labels: mockData.map((data) => data.label),
  datasets: [
    {
      data: mockData.map((data) => data.value),
      backgroundColor: 'rgba(224, 184, 181, 0.8)',
      borderColor: 'rgba(207, 72, 62, 1)',
      borderWidth: 2,
    },
  ],
};

export function ComparacaoDeVolumeDeRegras() {
  return (
    <ChartContainer chartTitle="Comparação de Volume de regras">
      <div className="w-full flex flex-1 gap-14 flex-col xl:flex-row pt-4">
        <div className="w-full flex items-center justify-center">
          <RadarChart data={data} />
        </div>
        <div className="flex flex-col items-start justify-center gap-8 w-full">
          {mockData.map((data, index) => (
            <span key={`${data.label}-${index}`} className="text-sm">
              {data.tooltip}
            </span>
          ))}
        </div>
      </div>
    </ChartContainer>
  );
}
