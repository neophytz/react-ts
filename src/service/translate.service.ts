import axios from "axios";

const getEncodedeParams = (sentence: string, target: string = 'hi', source: string = 'en') => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", sentence);
    encodedParams.append("target", target);
    encodedParams.append("source", source);
    return encodedParams
}

const options = (sentence: string) => ({
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': 'b06c93f613msh7a1cb31c819f61fp1e2c87jsnd7582594297a',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: getEncodedeParams(sentence)
});


export const translate = async (sentence: string) => {
    return await (await axios.request(options(sentence))).data;
}  
