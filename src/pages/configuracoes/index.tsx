import { ConfigurationUi } from 'presentation/components/ui/ConfigurationUi';
import { withAuth } from 'security/withAuth';

function Configuracoes() {
  return <ConfigurationUi />;
}

export default withAuth(Configuracoes);
