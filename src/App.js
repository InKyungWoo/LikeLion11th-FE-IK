import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        {/* 시작 페이지 */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;