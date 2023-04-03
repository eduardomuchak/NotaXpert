import { FileDropzone } from 'presentation/components/FileDropzone';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';
import { withAuth } from 'security/withAuth';

function Upload() {
  return (
    <PageContainer>
      <PageTitle isCentered>Upload de Backlog</PageTitle>
      <FileDropzone />
    </PageContainer>
  );
}

export default withAuth(Upload);
