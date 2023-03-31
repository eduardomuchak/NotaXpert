import { FileDropzone } from "presentation/ui/FileDropzone";
import { PageContainer } from "presentation/ui/PageContainer";
import { PageTitle } from "presentation/ui/PageTitle";
import { withAuth } from "security/withAuth";

function Upload() {
  return (
    <PageContainer>
      <PageTitle isCentered>Upload de Backlog</PageTitle>
      <FileDropzone />
    </PageContainer>
  );
}

export default withAuth(Upload);
