import { assets, workData } from "@/assets/assets";
import Image from "next/image";

const WorkContainer = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-5">
      {workData.map((project) => {
        return (
          <div
            className=" bg-white mx-auto max-w-96  w-full overflow-hidden relative group border-[0.5px] border-gray-200 shadow-sm rounded-lg "
            key={project.id}
          >
            <div className="h-52  overflow-hidden border-b-[0.5px] border-gray-200 ">
              <Image
                src={project.bgImage}
                alt={project.title}
                layout="responsive"
                width="300"
                height="200"
                className=" min-h-52 min-w-72 sm:min-w-96 -mt-1"
              />
            </div>
            <div className="px-3 py-1  flex items-center justify-between w-full">
              <h3 className="text-lg font-semibold duration-200 text-black flex items-center  gap-2">
                {project.title}<Image src={assets.open_link_black} alt="external-link" className="h-3 w-3 min-w-3 cursor-pointer" />
              </h3>
              <p className="text-gray-500 text-xs">{project.description}</p>
            </div>
            <p className="px-3 text-sm text-justify text-gray-800 py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              corporis ullam ratione corrupti officia soluta, deserunt enim
              impedit cumque, tenetur fugit magni ipsa nemo? Cum nihil accusamus
              nisi corrupti quisquam!
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkContainer;
