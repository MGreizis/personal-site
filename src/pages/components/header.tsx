import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="body-font relative bg-[#e2d5c3] text-[#000807] dark:bg-[#000807] dark:text-[#e2d5c3]">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <span className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <Link
            className="ml-5 inline-block whitespace-nowrap py-2 font-bold uppercase leading-relaxed dark:text-[#e2d5c3]"
            href="/"
          >
            Placeholder
          </Link>
        </span>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a
            className="mr-5 text-[#000807] hover:border-b-2 hover:border-[#4b2850] hover:text-[#4b2850] dark:text-[#e2d5c3] dark:hover:text-white"
            href="#"
          >
            First Link
          </a>
          <a
            className="mr-5 text-[#000807] hover:border-b-2 hover:border-[#4b2850] hover:text-[#4b2850] dark:text-[#e2d5c3] dark:hover:text-white"
            href="#"
          >
            Second Link
          </a>
          <a
            className="mr-5 text-[#000807] hover:border-b-2 hover:border-[#4b2850] hover:text-[#4b2850] dark:text-[#e2d5c3] dark:hover:text-white"
            href="#"
          >
            Third Link
          </a>
        </nav>
        <span className="border-l-2 border-[#4b2850] dark:border-white">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="mt-4 inline-flex items-center rounded py-1 px-3 text-base hover:text-[#4b2850] focus:outline-none dark:hover:text-white md:mt-0"
          >
            Dark Toggle
          </button>
        </span>
      </div>
    </header>
  );
}
