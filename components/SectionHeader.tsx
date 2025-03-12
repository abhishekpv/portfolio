type SectionHeaderProps = {
  heading: string;
  subHeading?: string;
  description?: string;
};

const SectionHeader = ({
  heading,
  subHeading,
  description,
}: SectionHeaderProps) => {
  return (
    <>
      <h4 className="text-center mb-2 text-lg font-Ovo">{heading}</h4>
      {subHeading && (
        <h2 className="text-center text-5xl font-Ovo">{subHeading}</h2>
      )}
      {description && (
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          {description}
        </p>
      )}
    </>
  );
};

export default SectionHeader;
