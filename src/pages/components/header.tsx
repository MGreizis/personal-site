import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="body-font relative bg-beige text-xl text-cstmblack dark:bg-cstmblack dark:text-beige">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <span className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <Link
            className="inline-block whitespace-nowrap px-3 font-bold uppercase leading-relaxed dark:text-beige"
            href="/"
          >
            Placeholder
          </Link>
        </span>
        <nav className="flex flex-wrap items-center justify-center text-xl md:ml-auto">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="mr-6 text-cstmblack hover:border-b-2 hover:border-cstmpurple hover:text-cstmpurple dark:text-beige dark:hover:text-white"
            href="#"
          >
            First Link
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="mr-6 text-cstmblack hover:border-b-2 hover:border-cstmpurple hover:text-cstmpurple dark:text-beige dark:hover:text-white"
            href="#"
          >
            Second Link
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="mr-6 text-cstmblack hover:border-b-2 hover:border-cstmpurple hover:text-cstmpurple dark:text-beige dark:hover:text-white"
            href="#"
          >
            Third Link
          </motion.a>
        </nav>
        <span className="border-l-2 border-cstmpurple dark:border-white">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="mt-4 inline-flex items-center rounded py-1 px-3 text-xl hover:text-cstmpurple focus:outline-none dark:hover:text-white md:mt-0"
          >
            Dark Toggle
          </button>
        </span>
      </div>
    </header>
  );
}
