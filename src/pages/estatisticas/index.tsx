import { PageContainer } from 'presentation/components/PageContainer';
import { PageTitle } from 'presentation/components/PageTitle';
import { withAuth } from 'security/withAuth';

function Estatisticas() {
  return (
    <PageContainer>
      <PageTitle>Estatísticas</PageTitle>
    </PageContainer>
  );
}
export default withAuth(Estatisticas);
