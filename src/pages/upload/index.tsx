import { FileDropzone } from 'presentation/ui/FileDropzone';
import { PageContainer } from 'presentation/ui/PageContainer';
import { PageTitle } from 'presentation/ui/PageTitle';

export default function Upload() {
  return (
    <PageContainer>
      <PageTitle isCentered>Upload de Backlog</PageTitle>
      <FileDropzone />
    </PageContainer>
  );
}
