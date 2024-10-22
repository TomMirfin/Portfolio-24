import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <nav className="bg-gray-800 p-4 mb-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">TM</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/experience" className="text-gray-300 hover:text-white">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-300 hover:text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contactMe" className="text-gray-300 hover:text-white">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
