import type { NextPage } from "next";
import BacklogTable from "presentation/ui/BacklogTable";
import { Header } from "presentation/ui/Header";

const Home: NextPage = () => (
  <>
    <Header />
    <div className="p-10 flex w-screen flex-col">
      <BacklogTable />
    </div>
  </>
);

export default Home;
