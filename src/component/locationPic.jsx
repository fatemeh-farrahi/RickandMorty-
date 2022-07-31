import { memo } from "react";
import logo from "../../src/logo.svg";
const LocationImage = memo((count, locationList) => {
  console.log("logo");
  return <img src={logo} alt={count} />;
});
export default LocationImage;
