import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import hz from "../../public/hz.jpg";
import four_i from "../../public/4I.png";
import mru from "../../public/mru.jpg";

const About: NextPage = () => {
  const locationTextClasses = "text-sm font-bold tracking-widest mb-1 text-white dark:text-cstmpurple uppercase tracking-wide";
  const experienceTextClasses = "leading-tight title-font mb-1 text-lg font-bold text-beige dark:text-cstmblack";
  const descriptionTextClasses = "leading-relaxed text-white dark:text-cstmblack";
  const dateTextClasses = "text-sm font-bold tracking-widest mb-3 text-gray-500 uppercase tracking-wide";
  const boxClasses = "mx-auto mb-8 bg-cstmblack dark:bg-white rounded-xl shadow-md overflow-hidden md:max-w-[70%] md:min-w-[70%] sm:max-w-full";
  const cityTextClasses = "text-white dark:text-cstmpurple";

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-col px-5 py-24 min-h-screen items-center bg-gradient-to-b from-beige to-white dark:from-cstmblack dark:to-cstmpurple">
        <div className={boxClasses}>
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image 
                className="h-48 w-full object-cover md:h-full md:w-64"
                src={hz} 
                alt="Picture of university building"
                width={500}
                height={500}
              />
            </div>
            <div className="p-8 w-full">
              <h3 className={locationTextClasses}>HZ University of Applied Sciences</h3>
              <h2 className={experienceTextClasses}>Information and Communication Technologies</h2>
              <p className={dateTextClasses}><span className={cityTextClasses}>Middelburg, NL</span> (2021-2025)</p>
              <p className={descriptionTextClasses}>Pursuing my BSc in Software Engineering at HZ University of Applied Sciences in Middelburg, The Netherlands </p>
            </div>
          </div>
        </div>

        <div className={boxClasses}>
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image 
                className="h-48 w-full object-cover md:h-full md:w-64"
                src={four_i} 
                alt="Picture of company logo"
                width={500}
                height={500}
              />
            </div>
            <div className="p-8 w-full">
              <h3 className={locationTextClasses}>4Industry B.V</h3>
              <h2 className={experienceTextClasses}>Intern DevOps Engineer</h2>
              <p className={dateTextClasses}><span className={cityTextClasses}>Utrecht, NL</span> (Sep 2024 - Jan 2025)</p>
              <p className={descriptionTextClasses}>Paid internship where my main goal was to increase traceability in the Software Development Lifecycle through the use of DevOps practices. This included improving existing CI/CD pipelines and creating entirely new ones</p>
            </div>
          </div>
        </div>
        <div className={boxClasses}>
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image 
                className="h-48 w-full object-cover md:h-full md:w-64"
                src={mru} 
                alt="Picture of university logo"
                width={500}
                height={500}
              />
            </div>
            <div className="p-8 w-full">
              <h3 className={locationTextClasses}>Mount Royal University</h3>
              <h2 className={experienceTextClasses}>Exchange Program: Computer Science</h2>
              <p className={dateTextClasses}><span className={cityTextClasses}>Calgary, CA</span> (Jan 2025 - May 2025)</p>
              <p className={descriptionTextClasses}>Exchange semester in Canada, during which I followed the Computer Science courses, which allowed me to further improve my existing Web Development skills (React), as well as learn new skills in Data Structures (Java) and Systems Analysis</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
