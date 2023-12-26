import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});


export default axiosClient;

//baseURL: 'https://www.themealdb.com/api/json/v1/1',