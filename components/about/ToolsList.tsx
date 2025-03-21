import { toolsData } from "@/assets/assets";
import { ToolCard } from "./ToolCard";
import { motion } from "motion/react";

const ToolsList = () => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="flex items-center justify-start flex-wrap gap-3 sm:gap-6 ml-1 max-w-3xl lg:max-w-lg xl:max-w-3xl"
    >
      {toolsData.map((tool) => {
        return (
          <ToolCard key={tool.title} title={tool.title} icon={tool.icon} />
        );
      })}
    </motion.ul>
  );
};

export default ToolsList;
