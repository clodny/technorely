import axios from 'axios'

export const getCountriesApi = (regionId) => {
  return axios.get(`https://restcountries.eu/rest/v2/region/${regionId}`)
}