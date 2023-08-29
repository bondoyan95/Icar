import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login/login";
import Registration from "./Registration/registration";
import About from "./ About / about";
import Home from "./Home";
import Bmw from "./Home/Body/Bmw/index";
import Toyota from "./Home/Body/Toyota/index";
import Ford from "./Home/Body/Ford/index";
import Mercedes from "./Home/Body/Mercedes/index";
import Honda from "./Home/Body/Honda/index";
import Audi from "./Home/Body/Audi/index";
import Tesla from "./Home/Body/Tesla/index";
import Nissan from "./Home/Body/Nissan/index";
import Kia from "./Home/Body/Kia/index";
import Lexus from "./Home/Body/Lexus/index";
import VW from "./Home/Body/VW/index";
import Mazda from "./Home/Body/Mazda/index";
import Corolla from "./Home/Body/Toyota/Corolla/index";
import Camry from "./Home/Body/Toyota/Camry/index";
import Prius from "./Home/Body/Toyota/Prius/index";
import Rav4 from "./Home/Body/Toyota/Rav4/index";
import Highlander from "./Home/Body/Toyota/Highlander/index";

import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/894/987/non_2x/speed-car-logo-concept-design-illustration-vector.jpg"
            alt="Formula 1 Icon"
            className="formula-1-icon"
          />
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/Login" className="nav-link">
            Login
          </Link>
          <Link to="/Registration" className="nav-link">
            Registration
          </Link>
          <Link to="/About" className="nav-link">
            About
          </Link>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/Highlander" element={<Highlander />} />
        <Route path="/Rav4" element={<Rav4 />} />
        <Route path="/Prius" element={<Prius />} />
        <Route path="/Camry" element={<Camry />} />
        <Route path="/Corolla" element={<Corolla />} />
        <Route path="/Mazda" element={<Mazda />} />
        <Route path="/VW" element={<VW />} />
        <Route path="/Tesla" element={<Tesla />} />
        <Route path="/Mercedes" element={<Mercedes />} />
        <Route path="/Toyota" element={<Toyota />} />
        <Route path="/Bmw" element={<Bmw />} />
        <Route path="/" element={<Home />} />
        <Route path="/Ford" element={<Ford />} />
        <Route path="/Honda" element={<Honda />} />
        <Route path="/Audi" element={<Audi />} />
        <Route path="/Nissan" element={<Nissan />} />
        <Route path="/Kia" element={<Kia />} />
        <Route path="/Lexus" element={<Lexus />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default Header;
