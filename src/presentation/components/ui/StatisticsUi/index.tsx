import { ChartContainer } from "presentation/components/ChartContainer";
import { LineChart } from "presentation/components/LineChart";
// import { PieChart } from "presentation/components/PieChart";
import { colors } from "presentation/components/PieChart/colors";
import { PieChartComponent } from "presentation/components/PieChart/interface";
import { StatisticsContainer } from "presentation/components/StatisticsContainer";
import { PageContainer } from "presentation/components/ui/PageUi/PageContainer";
import { PageTitle } from "presentation/components/ui/PageUi/PageTitle";
import { lineChartData } from "presentation/components/LineChart/mocks";
import { BarChart } from "presentation/components/BarChart";
import {
  // formattedData,
  errorData,
} from "presentation/components/BarChart/chartData";

export function StatisticsUi() {
  const mockData: PieChartComponent.Data[] = [
    {
      value: 20,
      label: "VIMs Processados com sucesso",
    },
    {
      value: 5,
      label: "VIMs não resolvidos",
    },
    {
      value: 75,
      label: "VIMs não resolvidos vencidos",
    },
  ];

  const mockData2: PieChartComponent.Data[] = [
    {
      value: 34,
      label: "15-30 dias",
    },
    {
      value: 55,
      label: "30-45 dias",
    },
    {
      value: 99,
      label: "45-60 dias",
    },
    {
      value: 56,
      label: "60-90 dias",
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
      <div className={"w-full flex flex-row gap-6 mt-6"}>
        {/* <div className={"w-full"}>
          <ChartContainer chartTitle="Porcentagem de VIMs completos e incompletos">
            <PieChart data={data} />
          </ChartContainer>
        </div> */}
        {/* <div className={"w-1/2 flex flex-row gap-6 mt-6"}>
          <div className={"w-full"}>
            <LineChart data={lineChartData} title="VIMs" allVIMs={true} />
          </div>
        </div> */}
        <div className={"w-full flex flex-row gap-6 mt-6"}>
          <div className={"w-full"}>
            <BarChart chartData={errorData} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
