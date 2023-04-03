import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';
import { withAuth } from 'security/withAuth';

function Estatisticas() {
  return (
    <PageContainer>
      <PageTitle>Estatísticas</PageTitle>
    </PageContainer>
  );
}
export default withAuth(Estatisticas);
