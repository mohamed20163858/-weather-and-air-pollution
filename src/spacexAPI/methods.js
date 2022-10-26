const fetchRockets = () => fetch('https://api.spacexdata.com/v3/rockets');
const fetchMisions = () => fetch('https://api.spacexdata.com/v3/missions');
const spacexTravelesHubAPIMethods = {
  fetchRockets,
  fetchMisions,
};
export default spacexTravelesHubAPIMethods;
