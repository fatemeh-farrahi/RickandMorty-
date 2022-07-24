import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Location from "./component/locations";
import About from "./component/about";
const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="location" element={<Location />} />
    </Routes>
  );
};
export default RouterComponent;
