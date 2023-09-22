import axios from 'axios';

export const Client = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character',
});
