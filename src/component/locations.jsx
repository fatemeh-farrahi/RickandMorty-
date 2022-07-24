import React, { useEffect, useState } from "react";
import axios from "axios";
let mounted = true;
const Locations = () => {
  const [locationList, setLocationList] = useState([]);
  const fecthAllLocation = async () => {
    const { data: res } = await axios.get(
      `https://rickandmortyapi.com/api/location`
    );
    mounted = false;
    setLocationList(res.results);
  };
  useEffect(() => {
    if (mounted) fecthAllLocation();
  }, []);

  return (
    <div className="d-flex flex-column w-100">
      <div className="d-flex justify-content-center text-third ">
        <h2>This is Location Page</h2>
      </div>
      <div className="bg-white text-primary d-flex  w-100 flex-wrap align-items-center justify-content-center">
        {locationList?.length > 0
          ? locationList.map((item) => {
              return (
                <div
                  key={`card-${item.id}`}
                  className=" d-flex w-25 card   m-3">
                  <div className="card-header"> {item.name}</div>
                  <div className="card-body "> {item.type}</div>
                </div>
              );
            })
          : "Loading"}
      </div>
    </div>
  );
};

export default Locations;
