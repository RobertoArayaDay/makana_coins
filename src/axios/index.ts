import axios from 'axios';

export const client = axios.create({
  baseURL: 'localhost:3000/api',
  withCredentials: true,
});

export * from './giftcards';
