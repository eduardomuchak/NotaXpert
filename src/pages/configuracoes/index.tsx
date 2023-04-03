import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';
import { withAuth } from 'security/withAuth';

function Configuracoes() {
  return (
    <PageContainer>
      <PageTitle>Configurações</PageTitle>
    </PageContainer>
  );
}

export default withAuth(Configuracoes);
