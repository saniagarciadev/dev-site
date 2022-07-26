import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Sania García</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a
            href="https://github.com/saniagarciadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/saniagarciadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </main>

      <footer className={styles.footer}>Copyright Sania García 2022</footer>
    </div>
  );
};

export default Home;
