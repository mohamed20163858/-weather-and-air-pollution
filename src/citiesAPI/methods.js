const fetchAllCaptialCities = () => fetch('https://countriesnow.space/api/v0.1/countries/capital');
const fetchAllCountryCities = () => fetch('https://countriesnow.space/api/v0.1/countries');
const fetchALLCountriesFlags = () => fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
const apiKey = 'f43d5eb45dbe323f3208c22e02d05c24';
const fetchCityGeocoding = (city, iso2) => fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${iso2}}&appid=${apiKey}`);
const fetchCityWeather = (lat, lon) => fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
const fetchCityAirPollution = (lat, lon) => fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

const citiesAPIMethods = {
  fetchAllCaptialCities,
  fetchAllCountryCities,
  fetchALLCountriesFlags,
  fetchCityGeocoding,
  fetchCityWeather,
  fetchCityAirPollution,
};
export default citiesAPIMethods;
