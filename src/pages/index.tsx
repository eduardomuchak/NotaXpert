import type { NextPage } from 'next';
import BacklogTable from 'presentation/ui/BacklogTable';
import { Header } from 'presentation/ui/Header';
import { KanbanView } from 'presentation/ui/KanbanView';
import { PageContainer } from 'presentation/ui/PageContainer';
import { PageTitle } from 'presentation/ui/PageTitle';

const Home: NextPage = () => (
  <>
    <Header />
    <PageContainer>
      <PageTitle>Board</PageTitle>
      <BacklogTable />
      <KanbanView />
    </PageContainer>
  </>
);

export default Home;
