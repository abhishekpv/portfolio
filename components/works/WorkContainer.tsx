import { assets, workData } from "@/assets/assets";
import Image from "next/image";

const WorkContainer = () => {
  return (
    <div className="flex flex-wrap items-center justify-center max-w-7xl mx-auto w-fit gap-5">
      {workData.map((project) => {
        return (
          <div
            className="aspect-square bg-no-repeat w-72 bg-cover border bg-center rounded-lg relative cursor-pointer group"
            key={project.id}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-black">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full duration-300 border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src={assets.send_icon}
                  alt={"send icon"}
                  className="w-5"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkContainer;
