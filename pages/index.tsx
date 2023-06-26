import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yuhyeon Kim Blog App</title>
        <link rel="icon" href="https://avatars.githubusercontent.com/u/120432007?v=4" />
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Yuhyeon Kim Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </div>
  );
};

export default Home;
