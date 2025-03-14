import { toolsData } from "@/assets/assets";
import { ToolCard } from "./ToolCard";

const ToolsList = () => {
  return (
    <ul className="flex items-center justify-start flex-wrap gap-3 sm:gap-6 ml-1 max-w-3xl lg:max-w-lg xl:max-w-3xl">
      {toolsData.map((tool) => {
        return (
          <ToolCard key={tool.title} title={tool.title} icon={tool.icon} />
        );
      })}
    </ul>
  );
};

export default ToolsList;
