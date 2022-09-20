import type { NextPage } from 'next';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Darwin Next JS Template</title>
      <meta name="description" content="Created by Darwin Agency" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://github.com/darwin-agency/nextjs-template/blob/main/README.md"
          className={styles.card}
        >
          <h2>Learn &rarr;</h2>
          <p>Learn about this template by checking out the Read Me!</p>
        </a>
      </div>
    </main>
  </div>
);

export default Home;
