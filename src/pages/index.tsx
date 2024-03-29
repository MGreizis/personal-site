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
        <title>MGreizis</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Header />
      <main
        className="flex sm:flex-col md:flex-row min-h-screen min-w-full items-center justify-evenly
        bg-gradient-to-b from-beige to-white dark:from-cstmblack dark:to-cstmpurple"
      >
        <motion.section
          className="flex max-w-[50%] flex-col lg:pl-24 md:pl-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="flex text-left lg:text-8xl md:text-6xl sm:text-4xl text-cstmblack dark:text-beige lg:pb-12 md:pb-8 sm:pb-6">
            Hi! I`m Mārtiņš!
          </h1>
          <h1 className="flex text-left lg:text-6xl md:text-4xl sm:text-2xl text-cstmblack dark:text-beige">
            I`m a Junior Software Developer!
          </h1>
        </motion.section>

        <motion.section
          className="flex max-w-[50%] flex-col items-center lg:pr-24 md:pr-20 sm:pr-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 1 }}>
            <Image
              src={selfImage}
              alt="Image of the developer"
              className="rounded-2xl sm:max-h-[80%]"
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
