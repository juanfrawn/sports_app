import axios from 'axios';

const BASE_URL = 'https://flashlive-sports.p.rapidapi.com/v1' 


const options = {
    url: BASE_URL,
    params: {
      league: '1', season: '2021'
    },
    headers: {
      'X-RapidAPI-Key': 'e91c9fcb1dmshab38d52978f2d2bp197e1bjsnba6ec0751407',
      'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
    }  
  };

  export const fetchFromAPI = async (url : string) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    
    return data;
}