import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  params: {city: 'New delhi'},
  headers: {
    'X-RapidAPI-Key': 'b06c93f613msh7a1cb31c819f61fp1e2c87jsnd7582594297a',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

export const weather = async () => {
  return await (await axios.request(options)).data;
}
