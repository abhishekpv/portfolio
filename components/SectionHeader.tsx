import { MouseContext } from "@/app/MouseProvider";
import { motion } from "motion/react";
import { useContext } from "react";

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
  const { setCursorType } = useContext(MouseContext);
  return (
    <>
      <motion.h4
        onMouseEnter={() => setCursorType("textNormal")}
        onMouseLeave={() => setCursorType("default")}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0. }}
        className="text-center mb-2 text-lg font-Ovo w-fit mx-auto"
      >
        {heading}
      </motion.h4>
      {subHeading && (
        <motion.h2
          onMouseEnter={() => setCursorType("textLarge")}
          onMouseLeave={() => setCursorType("default")}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-5xl font-Ovo w-fit mx-auto"
        >
          {subHeading}
        </motion.h2>
      )}
      {description && (
        <motion.p
          onMouseEnter={() => setCursorType("textNormal")}
          onMouseLeave={() => setCursorType("default")}
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
