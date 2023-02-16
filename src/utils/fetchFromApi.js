// import axios from 'axios';

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };

//my code---------------

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a45a4f83d1mshb0a566eeba4b9d0p1e1514jsnd1e44247c7d9",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  let data;
  await fetch(
    `https://youtube-v31.p.rapidapi.com/search?q=${url}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
    options
  )
    .then((response) => response.json())
    .then((response) => (data = response))
    .catch((err) => console.error(err));
  return data;
};


export const getChannelDetail = async (id) => {
  let d;
  await fetch(
    `https://youtube-v31.p.rapidapi.com/channels?part="snippet&id=${id}`,
    options
  )
    .then((response) => response.json())
    .then((response) =>{
      
       d = response
    })
    .catch((err) => console.error(err));
  return d;
 
};



