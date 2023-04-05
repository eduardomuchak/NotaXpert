import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Header } from 'presentation/components/Header';

import 'styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const headlessRoutes = ['/login', '/recuperar-senha', '/redefinir-senha'];
  const { pathname } = useRouter();

  return (
    <>
      {headlessRoutes.includes(pathname) ? null : <Header />}
      <Component {...pageProps} />
    </>
  );
}
