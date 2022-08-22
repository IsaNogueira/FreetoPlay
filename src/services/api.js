import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games?',
  params: {category: 'shooter'},
  headers: {
    'X-RapidAPI-Key': '08eff12502msh7db426f9bbc8b34p16cd01jsn433dae937968',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default axios;