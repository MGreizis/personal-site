import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import plushieMarketplace from "../../public/plushie-marketplace.png";
import adventureGame from "../../public/adventure-game.png";
import lwm from "../../public/lwm.png";
import gym from "../../public/gym-site.png";
import F1 from "../../public/F1.png";
import ProjectsBox from "./components/projectsBox";

const Projects: NextPage = () => {
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
            <ProjectsBox 
              projectTitle={"F1 DATA VIEWER"}
              shortDescription={"Dashboard for Formula 1 results"}
              description={"Dashboard for viewing past Formula 1 results. Built with React, Material UI, Tailwind CSS, and Supabase"}
              githubLink={"https://github.com/MGreizis/f1-data-dashboard"}
              image={F1}
              viewProjectLink={"https://f1-data-dashboard.vercel.app/"}
            />
            <ProjectsBox 
              projectTitle={"GYM WEBSITE"}
              shortDescription={"Simple gym website built with React"}
              description={"Gym website built with React and Tailwind CSS. It is fully responsive, yet simple and clean."}
              githubLink={"https://github.com/MGreizis/gym-website"}
              image={gym}
              viewProjectLink={"https://github.com/MGreizis/gym-website"}
            />
            <ProjectsBox 
              projectTitle={"MARKETPLACE"}
              shortDescription={"Skeleton site for a Plushie Marketplace"}
              description={"Simple skeleton site for a plushie marketplace. It is built with plain HTML and CSS, as a group project."}
              githubLink={"https://github.com/MGreizis/brainnest-week2"}
              image={plushieMarketplace}
              viewProjectLink={"https://mgreizis.github.io/brainnest-week2/"}
            />
            <ProjectsBox 
              projectTitle={"CONSOLE GAME"}
              shortDescription={"CLI Adventure Game built with Java"}
              description={"Simple CLI-based adventure game built with Java. Design Patterns were strictly followed to create the game."}
              githubLink={"https://github.com/MGreizis/sde-console-program"}
              image={adventureGame}
            />
            <ProjectsBox 
              projectTitle={"INTRANET"}
              shortDescription={"An Intranet built with Laravel and Bulma"}
              description={"Group project for a company intranet using Laravel and Bulma. Simple, yet functional and attractive."}
              githubLink={"https://github.com/MGreizis/Team-10-LWM-Project"}
              image={lwm}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
