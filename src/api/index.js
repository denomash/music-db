import axios from "axios";

const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.deezer.com" || "",
  headers: {
    Accept: "application/json",
  },
});

export default api;
