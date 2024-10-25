import "../assets/fonts/PlaywriteGBS-VariableFont_wght.ttf";
import { FaLinkedin } from "react-icons/fa";
import HomePageGraphics from "./HomePageGraphics";
import HomePageText from "./HomePageText";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Homepage() {
  // const [neonFlash, setNeonFlash] = useState(false);
  // const [secondNeonFlash, setSecondNeonFlash] = useState(false);

  // const [firstFlashCount, setFirstFlashCount] = useState(0);
  // const [secondFlashCount, setSecondFlashCount] = useState(0);

  // useEffect(() => {
  //   if (firstFlashCount < 3) {
  //     const flashRandom = Math.floor(Math.random() * 1000) + 500;
  //     const interval = setTimeout(() => {
  //       setNeonFlash((prev) => !prev);
  //       setFirstFlashCount((prevCount) => prevCount + 1);
  //     }, flashRandom);

  //     return () => clearTimeout(interval);
  //   }
  // }, [neonFlash, firstFlashCount]);

  // useEffect(() => {
  //   if (secondFlashCount < 3) {
  //     const flashRandom = Math.floor(Math.random() * 2000) + 500;
  //     const interval = setTimeout(() => {
  //       setSecondNeonFlash((prev) => !prev);
  //       setSecondFlashCount((prevCount) => prevCount + 1);
  //     }, flashRandom);

  //     return () => clearTimeout(interval);
  //   }
  // }, [secondNeonFlash, secondFlashCount]);

  return (
    <>
      <div className="absolute  lg:mt-20 qs:mt-2">
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
          Tom Mirfin
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
