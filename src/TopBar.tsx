import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <nav className="bg-gray-800 qs:bg-transparent p-4 mb-10">
      <div className="container mx-auto flex justify-between items-center qs:-ml-5">
        <div className="text-white text-lg font-bold qs:text-transparent">
          TM
        </div>
        <ul className="flex space-x-4 qs:space-x-2">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white qs:text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="text-gray-300 hover:text-white qs:text-sm"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-white qs:text-sm"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contactMe"
              className="text-gray-300 hover:text-white qs:text-sm"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
