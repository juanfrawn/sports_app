import axios from 'axios';

const BASE_URL = 'https://allsportsapi2.p.rapidapi.com/api' 

// juanmartinfr '7b0dfcc20fmsha4561832992d0e3p172f6ejsnc148ade14394',
// juanfrawn 'e91c9fcb1dmshab38d52978f2d2bp197e1bjsnba6ec0751407',

const options = {
    url: BASE_URL,
    headers: {
      'X-RapidAPI-Key': 'e91c9fcb1dmshab38d52978f2d2bp197e1bjsnba6ec0751407',
      'X-RapidAPI-Host': 'allsportsapi2.p.rapidapi.com'
    }  
  };

export const fetchFromAPI = async (url : string) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    
    return data;
}
