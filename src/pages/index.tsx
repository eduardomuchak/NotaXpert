import type { NextPage } from 'next';
import BacklogTable from 'presentation/ui/BacklogTable';
import { PageContainer } from 'presentation/ui/PageContainer';
import { PageTitle } from 'presentation/ui/PageTitle';

const Home: NextPage = () => (
  <PageContainer>
    <PageTitle>Board</PageTitle>
    <BacklogTable />
  </PageContainer>
);

export default Home;
