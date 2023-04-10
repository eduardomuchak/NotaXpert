import { ServiceInvoiceModal } from 'presentation/components/ServiceInvoiceModal';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';

export function ConfigurationUi() {
  return (
    <PageContainer>
      <PageTitle>Configurações</PageTitle>
      <ServiceInvoiceModal />
    </PageContainer>
  );
}
