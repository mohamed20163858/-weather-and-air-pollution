const fetchAllCaptialCities = () => fetch('https://countriesnow.space/api/v0.1/countries/capital');
const fetchAllCountryCities = () => fetch('https://countriesnow.space/api/v0.1/countries');
const fetchALLCountriesFlags = () => fetch('https://countriesnow.space/api/v0.1/countries/flag/images');

const citiesAPIMethods = {
  fetchAllCaptialCities,
  fetchAllCountryCities,
  fetchALLCountriesFlags,
};
export default citiesAPIMethods;
