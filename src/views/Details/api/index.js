const axios = require("axios");

export const getCountriesByCode = async (name) => {
  try {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
    );
    const [country] = data;
    return country;
  } catch (ex) {
    return Promise.reject(ex);
  }
};
