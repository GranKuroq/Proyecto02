
import axios from 'axios';

const API_KEY = "01b61fcce09d64db43061665f8839cac";
const BASE_URL = 'https://v3.football.api-sports.io/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-apisports-key': API_KEY,
  },
});

export const getTeams = async () => {
  try {
    const response = await api.get('teams?league=128&season=2023'); // Liga Argentina y temporada 2023
    return response.data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    throw error;
  }
};
