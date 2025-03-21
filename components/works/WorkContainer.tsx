import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import WorkTechStack from "./WorkTechStack";
import { motion } from "motion/react";
import { useContext } from "react";
import { MouseContext } from "@/app/MouseProvider";

const WorkContainer = () => {
  const { setCursorType } = useContext(MouseContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-5"
    >
      {workData.map((project, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.01, duration: 0.5 }}
            className=" bg-white dark:bg-darkHover dark:border-gray-600 mx-auto max-w-96  w-full overflow-hidden relative group border-[0.5px] border-gray-200 shadow-sm rounded-lg "
            key={project.id}
          >
            <div className="h-52  overflow-hidden border-b-[0.5px] border-gray-200 dark:border-gray-600 ">
              <Image
                src={project.bgImage}
                alt={project.title}
                layout="responsive"
                width="300"
                height="200"
                className=" min-h-52 min-w-72 sm:min-w-96 "
              />
            </div>
            <div className="px-3 py-1  flex items-center justify-between w-full">
              <h3
                onMouseEnter={() => setCursorType("textNormal")}
                onMouseLeave={() => setCursorType("default")}
                className="text-lg font-semibold duration-200 text-black dark:text-white flex items-center  gap-2"
              >
                {project.title}
                <motion.a
                  onMouseEnter={() => setCursorType("pointer")}
                  onMouseLeave={() => setCursorType("textNormal")}
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ rotate: 360, scale: 2 }}
                  href={project.link}
                  target="_blank"
                >
                  <Image
                    src={assets.open_link_black}
                    alt="external-link"
                    className="h-3 w-3 min-w-3 dark:invert"
                  />
                </motion.a>
              </h3>
              <p
                onMouseEnter={() => setCursorType("textNormal")}
                onMouseLeave={() => setCursorType("default")}
                className="text-gray-500 dark:text-gray-400 text-xs"
              >
                {project.tag}
              </p>
            </div>
            <WorkTechStack techStack={project.techs} />
            <p
              onMouseEnter={() => setCursorType("textNormal")}
              onMouseLeave={() => setCursorType("default")}
              className="px-3 text-sm text-justify text-gray-800 dark:text-gray-300 py-2 mb-2"
            >
              {project.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default WorkContainer;
