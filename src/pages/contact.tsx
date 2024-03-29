import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import GitHubSVG from "./components/svg/GitHubSVG";
import FacebookSVG from "./components/svg/FacebookSVG";
import LinkedInSVG from "./components/svg/LinkedInSVG";
import InstagramSVG from "./components/svg/InstagramSVG";
import { motion } from "framer-motion";

const Contact: NextPage = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [isEmailSent, setIsEmailSent] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mnqkeqnq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        setIsEmailSent(true);
        setFormData(initialFormData); // clear the form if email sent successfully
      } else {
        console.error("Failed to send email");
        setIsEmailSent(false);
      }
    } catch (error) {
      console.error("Failed to send email: ", error);
      setIsEmailSent(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.target.value,
    });
  };

  const inputClasses = "w-full rounded border border-cstmpurple bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-cstmblack focus:ring-1 focus:ring-cstmblack dark:border-beige dark:focus:border-white dark:focus:ring-1 dark:focus:ring-beige"
  const socialMediaLinkClasses = "mx-2 dark:text-beige"

  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main
        className="flex min-h-screen min-w-full items-center justify-evenly
        bg-gradient-to-b from-beige to-white dark:from-cstmblack dark:to-cstmpurple"
      >
        <section className="body-font relative text-cstmblack dark:text-beige">
          <div className="container mx-auto px-5 py-16 sm:py-8">
            <header className="mb-8 text-center">
              <h1 className="title-font mb-4 text-3xl font-medium sm:text-3xl">
                Contact Me
              </h1>
              <p className="mx-auto text-xl leading-relaxed lg:w-2/3">
                If you have any questions or just want to say hi, feel free to
                send me an email!
              </p>
            </header>
            <form
              onSubmit={handleSubmit}
              className="mx-auto md:w-2/3 lg:w-1/2"
              action="https://formspree.io/f/mnqkeqnq"
              method="POST"
            >
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label htmlFor="name" className="text-sm leading-7">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputClasses}`}
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label htmlFor="email" className="text-sm leading-7">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputClasses}`}
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label htmlFor="message" className="text-sm leading-7">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClasses} h-32 leading-6 resize-none`}
                    ></textarea>
                  </div>
                </div>
                <div className="w-full pt-3">
                  <motion.button
                    type="submit"
                    className="mx-auto flex rounded border-0 bg-cstmpurple py-2 px-8 text-lg 
                    text-beige hover:bg-cstmblack focus:outline-none 
                    dark:bg-beige dark:text-cstmblack dark:hover:bg-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    Send
                  </motion.button>
                </div>
                <figure className="mt-8 w-full border-t-2 border-cstmpurple p-2 pt-8 text-center dark:border-beige">
                  <p className="my-5 leading-normal">
                    Or you can find me on social media:
                  </p>
                  <span className="inline-flex">
                    <a
                      className={`${socialMediaLinkClasses}`}
                      href="https://github.com/MGreizis"
                      target="_blank"
                    >
                      <GitHubSVG />
                    </a>

                    <a
                      className={`${socialMediaLinkClasses}`}
                      href="https://www.linkedin.com/in/m%C4%81rti%C5%86%C5%A1-greizis-133476257/"
                      target="_blank"
                    >
                      <LinkedInSVG />
                    </a>
                    <a
                      className={`${socialMediaLinkClasses}`}
                      href="https://www.instagram.com/graizies/"
                      target="_blank"
                    >
                      <InstagramSVG />
                    </a>
                    <a
                      className={`${socialMediaLinkClasses}`}
                      href="https://www.facebook.com/martins.greizis.5/"
                      target="_blank"
                    >
                      <FacebookSVG />
                    </a>
                  </span>
                </figure>
              </div>
            </form>
            <div className="mt-4 text-center text-green-500 dark:text-green-400">
              {isEmailSent === true && "Email sent successfully!"}
              {isEmailSent === false && "Failed to send email."}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
