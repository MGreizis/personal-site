export default function Footer() {
  return (
    <footer className="body-font bg-white text-cstmblack dark:bg-cstmpurple dark:text-beige">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-8 sm:flex-row">
        <a className="title-font flex items-center justify-center font-medium text-cstmblack dark:text-beige md:justify-start">
          <span className="text-l ml-3">&#169; Copyright 2023 MGreizis</span>
        </a>
      </div>
    </footer>
  );
}
