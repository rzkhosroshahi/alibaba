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

export const getCountriesByName = async (name) => {
  try {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    return data;
  } catch (ex) {
    return Promise.reject(ex);
  }
};
