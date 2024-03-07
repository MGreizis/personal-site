import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import plushieMarketplace from "../../public/plushie-marketplace.png";
import adventureGame from "../../public/adventure-game.png";
import lwm from "../../public/lwm.png";
import gym from "../../public/gym-site.png";
import { Analytics } from "@vercel/analytics/react"

const Projects: NextPage = () => {
  const imageClasses = "mb-6 h-40 w-full rounded object-cover object-center";
  const projectTitleClasses = "text-xs font-bold tracking-widest text-white dark:text-cstmpurple";
  const viewProjectLinkClasses = "pt-2 pr-4 font-bold text-beige hover:text-white dark:text-cstmblack dark:hover:text-cstmpurple";
  const shortDescriptionClasses = "title-font mb-4 text-lg font-bold text-beige dark:text-cstmblack";
  const descriptionClasses = "leading-relaxed text-white dark:text-cstmblack";

  return (
    <>
      <Head>
        <title>My Work</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main
        className="flex min-h-screen min-w-full items-center justify-evenly 
        bg-gradient-to-b from-beige to-white dark:from-cstmblack dark:to-cstmpurple"
      >
        <section className="body-font container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <motion.div
                className="rounded-lg bg-cstmblack p-6 dark:bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  className={`${imageClasses}`}
                  src={gym}
                  alt="content"
                  width="800"
                  height="500"
                />
                <h3 className={`${projectTitleClasses}`}>
                  GYM WEBSITE
                </h3>
                <h2 className={`${shortDescriptionClasses}`}>
                  A simple gym website built with React
                </h2>
                <p className={`${descriptionClasses}`}>
                  A gym website built with React and Tailwind CSS. It is
                  fully responsive, yet simple and clean.
                </p>
                <div className="flex flex-wrap">
                  <a
                    className={`${viewProjectLinkClasses}`}
                    href="https://github.com/MGreizis/gym-website"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    className={`${viewProjectLinkClasses}`}
                    href="https://evogym-jade.vercel.app/"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <motion.div
                className="rounded-lg bg-cstmblack p-6 dark:bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  className={`${imageClasses}`}
                  src={plushieMarketplace}
                  alt="content"
                  width="800"
                  height="500"
                />
                <h3 className={`${projectTitleClasses}`}>
                  MARKETPLACE
                </h3>
                <h2 className={`${shortDescriptionClasses}`}>
                  Skeleton site for a Plushie Marketplace
                </h2>
                <p className={`${descriptionClasses}`}>
                  A simple skeleton site for a plushie marketplace. It is built
                  with plain HTML and CSS, as a group project.
                </p>
                <div className="flex flex-wrap">
                  <a
                    className={`${viewProjectLinkClasses}`}
                    href="https://github.com/MGreizis/brainnest-week2"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    className={`${viewProjectLinkClasses}`}
                    href="https://mgreizis.github.io/brainnest-week2/"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <motion.div
                className="rounded-lg bg-cstmblack p-6 dark:bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  className={`${imageClasses}`}
                  src={adventureGame}
                  alt="content"
                  width="800"
                  height="500"
                />
                <h3 className={`${projectTitleClasses}`}>
                  CONSOLE GAME
                </h3>
                <h2 className={`${shortDescriptionClasses}`}>
                  CLI Adventure Game built with Java
                </h2>
                <p className={`${descriptionClasses}`}>
                  A simple CLI-based adventure game built with Java.
                  Design Patterns were strictly followed to create the game.
                </p>
                <div className="flex flex-wrap">
                  <a
                    className={`${viewProjectLinkClasses}`}
                    href="https://github.com/MGreizis/sde-console-program"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <motion.div
                className="rounded-lg bg-cstmblack p-6 dark:bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  className={`${imageClasses}`}
                  src={lwm}
                  alt="content"
                  width="800"
                  height="500"
                />
                <h3 className={`${projectTitleClasses}`}>
                  INTRANET
                </h3>
                <h2 className={`${shortDescriptionClasses}`}>
                  An Intranet built with Laravel and Bulma
                </h2>
                <p className={`${descriptionClasses}`}>
                  A group project for a company intranet using Laravel and 
                  Bulma. Simple, yet functional and attractive.
                </p>
                <div className="flex flex-wrap">
                  <a
                    className={`${viewProjectLinkClasses}`}
                    href="https://github.com/MGreizis/Team-10-LWM-Project"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Analytics id="prj_KZ6pXgBoJD1X60mMikwEQBBaaInY"/>
    </>
  );
};

export default Projects;
