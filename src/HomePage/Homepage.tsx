import { useEffect, useState } from "react";
import "../assets/fonts/PlaywriteGBS-VariableFont_wght.ttf";
import { FaLinkedin } from "react-icons/fa";
import HomePageGraphics from "./HomePageGraphics";
import HomePageText from "./HomePageText";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactMe from "./ContactMe";

export default function Homepage() {
  const [neonFlash, setNeonFlash] = useState(false);
  const [secondNeonFlash, setSecondNeonFlash] = useState(false);

  // Counters to track the number of flashes
  const [firstFlashCount, setFirstFlashCount] = useState(0);
  const [secondFlashCount, setSecondFlashCount] = useState(0);

  // First neon flashing effect (flash 3 times)
  useEffect(() => {
    if (firstFlashCount < 3) {
      const flashRandom = Math.floor(Math.random() * 1000) + 500;
      const interval = setTimeout(() => {
        setNeonFlash((prev) => !prev);
        setFirstFlashCount((prevCount) => prevCount + 1); // Increment flash count
      }, flashRandom);

      return () => clearTimeout(interval);
    }
  }, [neonFlash, firstFlashCount]); // Dependency on neonFlash and firstFlashCount

  // Second neon flashing effect (flash 3 times)
  useEffect(() => {
    if (secondFlashCount < 3) {
      const flashRandom = Math.floor(Math.random() * 2000) + 500;
      const interval = setTimeout(() => {
        setSecondNeonFlash((prev) => !prev);
        setSecondFlashCount((prevCount) => prevCount + 1); // Increment flash count
      }, flashRandom);

      return () => clearTimeout(interval);
    }
  }, [secondNeonFlash, secondFlashCount]); // Dependency on secondNeonFlash and secondFlashCount

  return (
    <>
      <div className="absolute  mt-20">
        <p
          className="text-left text-pink-700 text-2xl"
          style={{
            fontStyle: "italic",
            fontFamily: "Playwrite England SemiJoined",
          }}
        >
          Hi there, my name is
        </p>
        <h1
          className="lg:text-6xl md:text-6xl sm:text-6xl qs:text-5xl font-bold border-b-cyan-400 border-b-8"
          style={{
            fontFamily: "Bungee Outline",
          }}
        >
          T<span className={neonFlash ? "text-white" : "text-pink-400"}>o</span>
          m Mir
          <span className={secondNeonFlash ? "text-white" : "text-pink-400"}>
            f
          </span>
          in
        </h1>

        <div className="flex-row flex mt-4 gap-x-5">
          <Link to={"https://github.com/TomMirfin"}>
            <FaGithub className="text-pink-700 lg:text-6xl md:text-6xl qs:text-4xl" />
          </Link>
          <Link to={"https://www.linkedin.com/in/tom-mirfin/"}>
            <FaLinkedin className="text-pink-700 lg:text-6xl md:text-6xl qs:text-4xl" />
          </Link>
        </div>
      </div>

      <div>
        <HomePageGraphics />
      </div>

      <HomePageText />
    </>
  );
}
