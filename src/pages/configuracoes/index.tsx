import { PageContainer } from "presentation/ui/PageContainer";
import { PageTitle } from "presentation/ui/PageTitle";
import { withAuth } from "security/withAuth";

function Configuracoes() {
  return (
    <PageContainer>
      <PageTitle>Configurações</PageTitle>
    </PageContainer>
  );
}

export default withAuth(Configuracoes);
