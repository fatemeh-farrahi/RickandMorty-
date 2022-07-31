import React, { useEffect, useMemo, useState } from "react";
import { fecthAllLocation, filterLocation } from "./../apis/location";
import LocationPic from "../component/locationPic";
const Locations = () => {
  const [locationList, setLocationList] = useState([]);
  const [mounted, setMounted] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (mounted) {
      fecthAllLocation().then((res) => {
        setLocationList(res.results);
        setMounted(false);
      });
    }
  }, []);
  const handleChange = ({ target }) => {
    let { value } = target;
    setSearchValue(value);
  };
  const renderLogo = (count) => {
    return <LocationPic count={count} />;
  };
  const showImage = useMemo(() => {
    console.log("omad image");
    renderLogo(count);
  }, [count]);
  const searchLocation = useMemo(() => {
    filterLocation(searchValue).then((res) => {
      setLocationList(res.results);
      setCount(res.results.length);
    });
  }, [searchValue]);
  const renderedList = useMemo(() => {
    return locationList?.length > 0
      ? locationList.map((item) => {
          return (
            <div key={`card-${item.id}`} className=" d-flex w-25 card   m-3">
              {/* <LocationPic count="1" /> */}
              <div className="card-header"> {item.name}</div>
              <div className="card-body "> {item.type}</div>
            </div>
          );
        })
      : "Loading";
  }, [locationList]);
  return (
    <div className="d-flex flex-column w-100">
      <div className="d-flex justify-content-center text-third ">
        <h2>This is Location Page</h2>
      </div>
      <input value={searchValue} onChange={(event) => handleChange(event)} />
      <button onClick={searchLocation}>Search</button>
      <button onClick={showImage}>count</button>

      <span>{count}</span>
      <div className="bg-white text-primary d-flex  w-100 flex-wrap align-items-center justify-content-center">
        {renderedList}
      </div>
    </div>
  );
};

export default Locations;
