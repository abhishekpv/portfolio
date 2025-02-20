import { workData } from "@/assets/assets";

const WorkContainer = () => {
  return (
    <div>
      {workData.map((project) => {
        return <div key={project.id} style={{backgroundImage:`url(${project.bgImage})`}}>{project.title}</div>;
      })}
    </div>
  );
};

export default WorkContainer;
