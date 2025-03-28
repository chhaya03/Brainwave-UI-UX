import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && (
        <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
          {title}
        </h1>
      )}
      {text && (
        <p className="font-light text-[0.875rem] leading-6 md:text-base mt-4 text-[#757185]">
          {text}
        </p>
      )}
    </div>
  );
};

export default Heading;
