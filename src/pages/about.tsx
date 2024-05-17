import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import hz from "../../public/hz.jpg";
import four_i from "../../public/4I.png";
import mru from "../../public/mru.jpg";
import AboutBox from "./components/aboutBox";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-col px-5 py-24 min-h-screen items-center bg-gradient-to-b from-beige to-white dark:from-cstmblack dark:to-cstmpurple">
        <AboutBox 
          image={hz}
          location={"HZ University of Applied Sciences"}
          experience={"Information and Communication Technologies"}
          city={"Middelburg, NL"}
          date={"(2021-2025)"}
          description={"Pursuing my BSc in Software Engineering at HZ University of Applied Sciences in Middelburg, The Netherlands"}
        />

        <AboutBox 
          image={four_i}
          location={"4Industry B.V"}
          experience={"Intern DevOps Engineer"}
          city={"Utrecht, NL"}
          date={"(Sep 2024 - Jan 2025)"}
          description={"Paid internship where my main goal was to increase traceability in the Software Development Lifecycle through the use of DevOps practices. This included improving existing CI/CD pipelines and creating entirely new ones"}
        />

        <AboutBox 
          image={mru}
          location={"Mount Royal University"}
          experience={"Exchange Program: Computer Science"}
          city={"Calgary, CA"}
          date={"(Jan 2025 - May 2025)"}
          description={"Exchange semester in Canada, during which I followed the Computer Science courses, which allowed me to further improve my existing Web Development skills (React), as well as learn new skills in Data Structures (Java) and Systems Analysis"}
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
