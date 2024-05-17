import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

const ProjectsBox = ({ projectTitle, shortDescription, description, githubLink, image, viewProjectLink}: { 
  projectTitle: string, 
  shortDescription: string, 
  description: string, 
  image: StaticImageData, 
  githubLink: string, 
  viewProjectLink?: string 
}) => {
  const imageClasses = "mb-6 h-40 w-full rounded object-cover object-center";
  const projectTitleClasses =
    "text-xs font-bold tracking-widest text-white dark:text-cstmpurple";
  const viewProjectLinkClasses =
    "pt-2 pr-4 font-bold text-beige hover:text-white dark:text-cstmblack dark:hover:text-cstmpurple";
  const shortDescriptionClasses =
    "title-font mb-2 text-lg font-bold text-beige dark:text-cstmblack";
  const descriptionClasses = "leading-relaxed text-white dark:text-cstmblack";

  return (
    <div className="p-4 md:w-1/2 xl:w-1/4">
      <motion.div
        className="rounded-lg bg-cstmblack p-6 dark:bg-white min-h-[450px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          className={`${imageClasses}`}
          src={image}
          alt="content"
          width="800"
          height="500"
        />
        <h3 className={`${projectTitleClasses}`}>
          {projectTitle}
        </h3>
        <h2 className={`${shortDescriptionClasses}`}>
          {shortDescription}
        </h2>
        <p className={`${descriptionClasses}`}>
          {description}
        </p>
        <div className="flex flex-wrap">
          <a
            className={`${viewProjectLinkClasses}`}
            href={githubLink}
            target="_blank"
          >
            GitHub
          </a>
          {viewProjectLink && (
            <a
              className={`${viewProjectLinkClasses}`}
              href={viewProjectLink}
              target="_blank"
            >
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectsBox;