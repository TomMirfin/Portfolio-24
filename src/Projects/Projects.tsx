import { motion } from "framer-motion";
import healthNavPic from "../assets/imgs/Healthnav.png";

export default function Projects() {
  const projects = [
    {
      name: "HealthNav",
      description: "Health and Wellbeing App - Professional Experience",
      techStack: ["React", "React Native", "Typescript", "AWS"],
      img: healthNavPic,
    },
  ];

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5"
    >
      {projects.map((project) => (
        <div key={project.name} className="box">
          <img
            src={project.img}
            alt={`${project.name} image`}
            className="w-full h-48 object-cover mt"
          />

          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-gray-200">
              {project.name}
            </h2>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block bg-cyan-200 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
