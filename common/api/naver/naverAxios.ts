import axios from 'axios';
import endpoints from '../endpoints';

const naverAxiosInstance = axios.create({
  baseURL: endpoints.NAVER_BOOK_SEARCH_API,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'X-Naver-Client-Id': process.env.NAVER_API_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.NAVER_API_CLIENT_SECRET,
  },
  timeout: 3000,
});

naverAxiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response.data),
  (error) => Promise.reject(error)
);

export default naverAxiosInstance;
