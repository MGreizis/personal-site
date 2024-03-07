import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex min-h-screen min-w-full items-center justify-evenly 
      bg-gradient-to-b from-beige to-white dark:from-cstmblack dark:to-cstmpurple">
        <p className="text-beige">test</p>
      </main>
      <Footer />
    </>
  );
};

export default About;
