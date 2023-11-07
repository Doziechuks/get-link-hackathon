import axios from "axios";

const baseURL = "https://backend.getlinked.ai";

export const axiosRequest = axios.create({
  baseURL,
});
