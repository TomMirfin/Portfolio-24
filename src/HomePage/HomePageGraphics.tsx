import myImage from "../assets/imgs/myImage.jpg";

import { motion } from "framer-motion";
export default function HomePageGraphics() {
  return (
    <motion.div
      className="flex flex-row justify-between"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div></div>
      <div className="relative min-h-[300px]">
        <img
          src={myImage}
          alt="Tom Mir"
          className="rounded-full absolute z-50 lg:top-6 md:top-6  right-9  sm:w-32 sm:h-32 md:w-42 md:h-42 lg:w-48 lg:h-48"
        />

        <motion.div
          className="bg-cyan-400 rounded-full lg:w-52 lg:h-52 bottom-10 sm:w-42 sm:h-42 md:h-36 md:w-36 z-48"
          animate={{
            rotate: [0, 360],
            borderRadius: ["20%", "50%"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 10,
          }}
        ></motion.div>
        <div className="bg-slate-600 rounded-full lg:w-52 lg:h-52 md:w-36 md:h-36 sm:w-42 sm:h-42  absolute top-2 lg:right-4 md:right-4"></div>
      </div>
    </motion.div>
  );
}
