function PageThumbnail({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="containerX">
      <div className="pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-16 md:pb-20">
        <p className="title blackGradient">{title}</p>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-text-600 font-inter font-normal md:font-light uppercase leading-[140%] mt-6 md:mt-5">
          {description}
        </p>
      </div>
    </div>
  );
}

export default PageThumbnail;
