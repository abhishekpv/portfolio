type WorkTechStackProps = {
  techStack: string[];
};

const WorkTechStack = ({ techStack }: WorkTechStackProps) => {
  return (
    <ul className="flex items-center justify-start flex-wrap gap-x-2 gap-y-1 my-2 px-3">
      {techStack.map((tech, index) => {
        return (
          <li
            key={index}
            className=" whitespace-nowrap text-xs text-gray-600 dark:text-gray-400"
          >
            #{tech}
          </li>
        );
      })}
    </ul>
  );
};

export default WorkTechStack;
