import Image, { type StaticImageData } from "next/image";

const AboutBox = ({ image, location, experience, city, date, description }: {
  image: StaticImageData;
  location: string;
  experience: string;
  city: string;
  date: string;
  description: string;
}) => {
  const locationTextClasses =
    "text-sm font-bold tracking-widest mb-1 text-white dark:text-cstmpurple uppercase tracking-wide";
  const experienceTextClasses =
    "leading-tight title-font mb-1 text-lg font-bold text-beige dark:text-cstmblack";
  const descriptionTextClasses =
    "leading-relaxed text-white dark:text-cstmblack";
  const dateTextClasses =
    "text-sm font-bold tracking-widest mb-3 text-gray-500 uppercase tracking-wide";
  const boxClasses =
    "mx-auto mb-8 bg-cstmblack dark:bg-white rounded-xl shadow-md overflow-hidden md:max-w-[70%] md:min-w-[70%] sm:max-w-full";
  const cityTextClasses = "text-white dark:text-cstmpurple";

  return (
    <div className={boxClasses}>
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image 
            className="h-48 w-full object-cover md:h-full md:w-64"
            src={image} 
            alt="Picture to go along with description"
            width={500}
            height={500}
          />
        </div>
        <div className="p-8 w-full">
          <h3 className={locationTextClasses}>{location}</h3>
          <h2 className={experienceTextClasses}>{experience}</h2>
          <p className={dateTextClasses}><span className={cityTextClasses}>{city}</span> {date}</p>
          <p className={descriptionTextClasses}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutBox;