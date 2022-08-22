import axios from 'axios';

export const getInstance = () => {
    const instance = axios.create({
        baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
        headers: {
            'X-RapidAPI-Key': '08eff12502msh7db426f9bbc8b34p16cd01jsn433dae937968',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
        
    });
    return instance;
}