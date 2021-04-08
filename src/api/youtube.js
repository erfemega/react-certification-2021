import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_KEY;

export const bySnippet = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
  },
});
export const byContentDetail = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'contentDetail',
    key: KEY,
  },
});
