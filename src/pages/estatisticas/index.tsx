import { PageContainer } from "presentation/ui/PageContainer";
import { PageTitle } from "presentation/ui/PageTitle";
import { withAuth } from "security/withAuth";

function Estatisticas() {
  return (
    <PageContainer>
      <PageTitle>Estatísticas</PageTitle>
    </PageContainer>
  );
}
export default withAuth(Estatisticas);
