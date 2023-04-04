import { StatisticsUi } from 'presentation/components/ui/StatisticsUi';
import { withAuth } from 'security/withAuth';

function Estatisticas() {
  return <StatisticsUi />;
}
export default withAuth(Estatisticas);
