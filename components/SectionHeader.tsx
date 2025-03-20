import { motion } from "motion/react";

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
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        {heading}
      </motion.h4>
      {subHeading && (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-5xl font-Ovo"
        >
          {subHeading}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          {description}
        </motion.p>
      )}
    </>
  );
};

export default SectionHeader;
