import type { NextPage } from 'next';

import { PageContainer } from 'presentation/components/ui/PageUi/PageContainer';
import { PageTitle } from 'presentation/components/ui/PageUi/PageTitle';

import { withAuth } from 'security/withAuth';

import BacklogTable from 'presentation/components/BacklogTable';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <PageTitle>Board</PageTitle>
      <BacklogTable />
    </PageContainer>
  );
};

export default withAuth(Home);
