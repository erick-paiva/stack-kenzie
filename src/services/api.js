import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-stack-kenzie.herokuapp.com",
});
