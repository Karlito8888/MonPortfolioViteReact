import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import ProjectsSass from "./pages/ProjectsSass";
import ProjectsJS from "./pages/ProjectsJS";
import ProjectsReact from "./pages/ProjectsReact";
import ProjectsGames from "./pages/ProjectsGames";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/sass" element={<ProjectsSass />} />
          <Route path="/projects/js" element={<ProjectsJS />} />
          <Route path="/projects/react" element={<ProjectsReact />} />
          <Route path="/projects/games" element={<ProjectsGames />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
