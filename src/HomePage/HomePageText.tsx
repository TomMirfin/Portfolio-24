import { motion } from "framer-motion";
import React from "react";

export default function HomePageText() {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <p
        className="text-left"
        style={{
          fontSize: "1rem",
        }}
      >
        I am a Full Stack Developer who has worked with Typescript, React, React
        Native and AWS systems such as <br />
        Amplify, EC2, S3 & RDS. My work experience has revolved around
        rebuilding HealthNav, a Health and Wellbeing App. <br />
        <br />
        Aside from coding, I am a keen runner, and I'm planning on running a
        half marathon next year (the first in a decade!). <br />
        I also enjoy playing golf on weekends and spending time with my partner
        - which mostly involved DIY in the house. <br />
      </p>
    </motion.div>
  );
}
