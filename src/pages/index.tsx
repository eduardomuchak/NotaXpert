import type { NextPage } from 'next';
import { Header } from 'presentation/ui/Header';

const Home: NextPage = () => (
  <>
    <Header />
    <div className="bg-red-400 w-screen h-full flex items-center justify-center">
      <h1 className="font-sanofiSansRegular text-9xl">Teste</h1>
    </div>
  </>
);

export default Home;
