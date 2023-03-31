import type { NextPage } from 'next';

import { PageContainer } from 'presentation/ui/PageContainer';
import { PageTitle } from 'presentation/ui/PageTitle';

import { withAuth } from 'security/withAuth';

import BacklogTable from 'presentation/ui/BacklogTable';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <PageTitle>Board</PageTitle>
      <BacklogTable />
    </PageContainer>
  );
};

export default withAuth(Home);
