import axios from "axios";
import { API_KEY } from "./../constant/constant";
const instance = axios.create({
  baseURL: `https://newsapi.org/v2/everything?q=Apple&from=2022-10-10&sortBy=popularity&apiKey=${API_KEY}`,
});
export default instance
