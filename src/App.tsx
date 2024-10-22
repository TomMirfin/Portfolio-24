import "./App.css";
import Homepage from "./HomePage/Homepage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import ContactMe from "./HomePage/ContactMe";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <TopBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
