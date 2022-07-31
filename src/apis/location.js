import axios from "axios";
export const fecthAllLocation = async () => {
  return await axios
    .get(`https://rickandmortyapi.com/api/location`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error.response));
};
export const filterLocation = async (phrase) => {
  return await axios
    .get(`https://rickandmortyapi.com/api/location/?name=${phrase}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error.response));
};
