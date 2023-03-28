import { FileDragNDrop } from 'presentation/ui/FileDragNDrop';
import { Header } from 'presentation/ui/Header';
import { PageContainer } from 'presentation/ui/PageContainer';
import { PageTitle } from 'presentation/ui/PageTitle';

export default function Upload() {
  return (
    <>
      <Header />
      <PageContainer>
        <PageTitle isCentered>Upload de Backlog</PageTitle>
        <FileDragNDrop />
      </PageContainer>
    </>
  );
}
