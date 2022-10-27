const fetchAllCaptialCities = () => fetch('https://countriesnow.space/api/v0.1/countries/capital');
const fetchAllCountryCities = (data) => fetch('https://countriesnow.space/api/v0.1/countries/cities', { method: 'POST', body: JSON.stringify(data) });
const citiesAPIMethods = {
  fetchAllCaptialCities,
  fetchAllCountryCities,
};
export default citiesAPIMethods;
