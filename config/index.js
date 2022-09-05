import axios from "axios";

import errorHandler from "./errorHandler";

// Create Axios
// const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API });
const instance = axios.create({ baseURL: process.env.MODE === "PRO" ? process.env.NEXT_PUBLIC_API_PRO : process.env.NEXT_PUBLIC_API_DEV });

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
