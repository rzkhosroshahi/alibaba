const axios = require("axios");

export const getCountriesByRegion = async (region = "Asia") => {
  try {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
    return data;
  } catch (ex) {
    return Promise.reject(ex);
  }
};
