import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import selfImage from "../../public/self.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main
        className="flex min-h-screen min-w-full items-center justify-evenly
        bg-gradient-to-b from-beige to-white dark:from-cstmblack dark:to-cstmpurple"
      >
        <motion.section
          className="flex max-w-[50%] flex-col pl-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="flex text-left text-8xl text-cstmblack dark:text-beige">
            Amet laborum commodo consectetur ullamco dolore culpa in.
          </h1>
        </motion.section>

        <motion.section
          className="flex max-w-[50%] flex-col items-center pr-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
          >
            <Image
              src={selfImage}
              alt="Image of a funny cat"
              className="rounded-2xl"
              width="500"
              height="700"
            />
          </motion.div>
          <p className="text-cstmblack dark:text-beige">That`s me! :)</p>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
