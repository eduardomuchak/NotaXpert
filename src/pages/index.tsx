import type { GetServerSideProps, NextPage } from "next";

import { PageContainer } from "presentation/ui/PageContainer";
import { PageTitle } from "presentation/ui/PageTitle";
import { parseCookies } from "nookies";
import { getApiClient } from "services/axios";

import BacklogTable from "presentation/ui/BacklogTable";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <PageTitle>Board</PageTitle>
      <BacklogTable />
    </PageContainer>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getApiClient(ctx);
  const cookies = parseCookies(ctx);
  const sanofiToken = cookies["sanofi-token"];

  if (!sanofiToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // await apiClient.get("/users");

  return {
    props: {},
  };
};
