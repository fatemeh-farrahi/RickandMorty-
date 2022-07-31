import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Location from "./component/locations";
import About from "./component/about";
import Count from "./component/count";
import Counter from "./component/counter";
const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="location" element={<Location />} />
      <Route path="count" element={<Count />} />
      <Route path="counter" element={<Counter />} />
    </Routes>
  );
};
export default RouterComponent;
