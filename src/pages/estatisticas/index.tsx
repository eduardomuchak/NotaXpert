import { BarChart } from "presentation/components/BarChart";
import { PageContainer } from "presentation/components/ui/PageUi/PageContainer";
import { StatisticsUi } from "presentation/components/ui/StatisticsUi";
import { withAuth } from "security/withAuth";

function Estatisticas() {
  return (
    <div>
      <PageContainer>
        <StatisticsUi />
        <div className="w-1/2">
          <BarChart />
        </div>
      </PageContainer>
    </div>
  );
}
export default withAuth(Estatisticas);
