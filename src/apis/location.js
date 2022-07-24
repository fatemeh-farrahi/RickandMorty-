import axios from "axios";
const fecthAllLocation = async () => {
  await axios.get(`https://rickandmortyapi.com/api/location`).then((result) => {
    return result.data.results;
  });
};
export default fecthAllLocation;
