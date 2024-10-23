import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CV = () => {
  const targetRefs = Array.from({ length: 8 }, () => useRef(null));
  const [visibility, setVisibility] = useState(Array(8).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibility((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = true;
              return newVisibility;
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    targetRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      targetRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="p-6 max-w-3xl bg-[rgb(13,18,26)] rounded-lg text-left">
      {[
        {
          title: "Tom Mirfin",
          subtitle: "Junior Software Developer",
          content: (
            <>
              <p className="mb-2 text-white">Tadcaster, UK</p>
              <p className="mb-2 text-white">
                Email:{" "}
                <a
                  href="mailto:t.a.mirfin@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  t.a.mirfin@gmail.com
                </a>
              </p>
              <p className="mb-4 text-white">Phone: 0755 7355 021</p>
              <p className="mb-4 text-white">
                <a
                  href="https://github.com"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>{" "}
                |
                <a
                  href="https://linkedin.com"
                  className="text-blue-400 hover:underline ml-1"
                >
                  LinkedIn
                </a>
              </p>
              <h3 className="text-2xl font-semibold mt-6 mb-2 text-cyan-400">
                Profile
              </h3>
              <p className="mb-4 text-white">
                I am a Software Developer with hands-on experience in full-stack
                development gained through both professional roles and the
                Northcoders boot camp. After transitioning from a decade in
                hospitality, I have quickly adapted and contributed to
                real-world projects, including rebuilding and deploying mobile
                apps for iOS and Android. I have experience using AWS services
                (EC2, RDS, Amplify) for cloud infrastructure, alongside
                expertise in TypeScript, JavaScript, React, and Node.js.
                Additionally, I have managed and updated CMS systems and handled
                live environment updates. Passionate about developing scalable,
                user-friendly applications, I thrive in agile environments,
                using SCRUM methodologies to deliver high-quality code. My goal
                is to continue leveraging my technical skills and industry
                experience to drive innovation within a dynamic development
                team.
              </p>
            </>
          ),
        },
        {
          title: "Education",
          content: (
            <>
              <p className="font-semibold text-white">Northumbria University</p>
              <p className="text-white">
                BSc(Hons) Computer Aided Product Design
              </p>
              <h3 className="text-2xl font-semibold mt-6 mb-2 text-cyan-400">
                Technical Skills
              </h3>
              <ul className="list-disc ml-6 mb-4">
                <li className="text-white">
                  <strong>Languages:</strong> TypeScript, JavaScript (Node.js,
                  browser environments, mobile environments)
                </li>
                <li className="text-white">
                  <strong>Testing:</strong> Test Driven Development (TDD), Jest,
                  Supertest
                </li>
                <li className="text-white">
                  <strong>Back-end:</strong> SQL, PostgreSQL, database seeding,
                  migrations
                </li>
                <li className="text-white">
                  <strong>Front-end:</strong> HTML, CSS, React, React Native
                </li>
                <li className="text-white">
                  <strong>Hosting:</strong> Cloudflare, Netlify
                </li>
                <li className="text-white">
                  <strong>Soft Skills:</strong> Paired programming, technical
                  communication, SDL, Agile, and SCRUM methodologies
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Work Experience",
          content: (
            <>
              <h4 className="font-semibold text-cyan-400">
                Zeno Health Group (January 2024 – Present)
              </h4>
              <ul className="list-disc ml-6 mb-4">
                <li className="text-white">
                  Played an integral role in rebuilding the HealthNav app from
                  the ground up, focusing on scalability and user experience.
                </li>
                <li className="text-white">
                  Developed and implemented new features using TypeScript and
                  React Native, enhancing the app's functionality and
                  performance.
                </li>
                <li className="text-white">
                  Sole Developer creating features for HealthNav from design
                  templates.
                </li>
                <li className="text-white">
                  Developed back-end structures using AWS services, including
                  EC2, RDS, and Amplify, with Node.js.
                </li>
                <li className="text-white">
                  Managed and updated the company’s CMS system, using AWS
                  Amplify to streamline development and deployment.
                </li>
                <li className="text-white">
                  Responsible for pushing updates to both the CMS and live
                  environments, ensuring smooth operations.
                </li>
                <li className="text-white">
                  Deployed the app to both iOS and Android platforms.
                </li>
                <li className="text-white">
                  Worked closely with a small agile team to meet project
                  deadlines and deliverables, practicing Agile methodologies and
                  participating in regular SCRUM meetings.
                </li>
                <li className="text-white">
                  Ensured high code quality through thorough testing, code
                  reviews, and adherence to best practices.
                </li>
                <li className="text-white">
                  Creating and working with REST APIs.
                </li>
              </ul>
            </>
          ),
        },
        {
          title:
            "Junior/Trainee Software Developer (North Coders) (October 2023 – January 2024)",
          content: (
            <ul className="list-disc ml-6 mb-4">
              <li className="text-white">
                Built robust back-end systems using Express.js, Node.js, SQL,
                and PostgreSQL, focusing on performance and security.
              </li>
              <li className="text-white">
                Created dynamic, responsive front-end applications using HTML,
                CSS, and React, prioritizing user experience and accessibility.
              </li>
              <li className="text-white">
                Improved communication and teamwork through pair programming
                sessions, code reviews, and collaborative projects.
              </li>
            </ul>
          ),
        },
        {
          title:
            "Customer & Trading Manager (Sainsbury’s) (June 2023 – October 2023)",
          content: (
            <ul className="list-disc ml-6 mb-4">
              <li className="text-white">
                Successfully managed store operations during shifts, ensuring
                smooth workflow and customer satisfaction.
              </li>
              <li className="text-white">
                Supervised and supported colleagues, fostering a positive work
                environment.
              </li>
              <li className="text-white">
                Maintained accurate stock levels, preventing shortages and
                overstock situations.
              </li>
            </ul>
          ),
        },
        {
          title: "Self-Study Career Break (February 2023 – September 2023)",
          content: (
            <ul className="list-disc ml-6 mb-4">
              <li className="text-white">
                Dedicated time to self-learning JavaScript through online
                courses and tutorials on Udemy and YouTube, building a strong
                foundation in modern web development.
              </li>
            </ul>
          ),
        },
        {
          title:
            "General Manager (Stonegate Pub Company) (January 2021 – February 2023)",
          content: (
            <ul className="list-disc ml-6 mb-4">
              <li className="text-white">
                Oversaw daily operations of the site, ensuring high standards of
                service and compliance.
              </li>
              <li className="text-white">
                Managed staff hiring, training, and performance, leading to
                improved team efficiency and customer satisfaction.
              </li>
              <li className="text-white">
                Controlled labour and stock, ensuring financial targets were met
                and exceeded.
              </li>
            </ul>
          ),
        },
        {
          title:
            "General Manager (Mitchell’s & Butlers) (March 2015 – January 2021)",
          content: (
            <ul className="list-disc ml-6 mb-4">
              <li className="text-white">
                Advanced from the Retail Graduate Scheme to General Manager,
                managing multiple locations and teams.
              </li>
              <li className="text-white">
                Implemented operational improvements that enhanced efficiency
                and customer experience.
              </li>
              <li className="text-white">
                Led teams across various sites, driving consistent performance
                and achieving business goals.
              </li>
            </ul>
          ),
        },
      ].map((section, index) => (
        <motion.div
          key={index}
          ref={targetRefs[index]}
          initial={{ x: -1000 }}
          animate={visibility[index] ? { x: 0 } : { x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mt-6 mb-2 text-cyan-400">
            {section.title}
          </h3>
          {section.content}
        </motion.div>
      ))}
    </div>
  );
};

export default CV;
