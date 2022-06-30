import axios from "../config";
import Cookies from "js-cookie";

// Fetches GET data from an API
export function getData(url, params) {
  const token = Cookies.get("token");

  return axios.get(`${url}`, { params, headers: { Authorization: `Bearer ${token}` } });
}

// Fetches POST data from an API
export async function postData(url, payload) {
  const token = Cookies.get("token");

  return await axios.post(`${url}`, payload, { headers: { Authorization: `Bearer ${token}` } });
}
