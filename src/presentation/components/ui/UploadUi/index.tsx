import { FileDropzone } from 'presentation/components/FileDropzone';
import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';

export function UploadUi() {
  return (
    <PageContainer>
      <PageTitle isCentered>Upload de Backlog</PageTitle>
      <FileDropzone />
    </PageContainer>
  );
}
