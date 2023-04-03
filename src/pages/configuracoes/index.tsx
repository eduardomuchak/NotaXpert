import { PageContainer } from 'presentation/components/PageContainer';
import { PageTitle } from 'presentation/components/PageTitle';
import { withAuth } from 'security/withAuth';

function Configuracoes() {
  return (
    <PageContainer>
      <PageTitle>Configurações</PageTitle>
    </PageContainer>
  );
}

export default withAuth(Configuracoes);
