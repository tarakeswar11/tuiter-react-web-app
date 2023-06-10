import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

//const SERVER_API_URL = "https://tuiter-node-server-app-edyt.onrender.com/api"
const USERS_URL = `${API_BASE}/users`;

console.log(USERS_URL);
const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
 const response = await api.post(`${USERS_URL}/login`, { username, password });
 const user = response.data;
 return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
   };
export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
   };
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
   };
export const register = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/register`, { username, password });
    const user = response.data;
    console.log(user);
    return user;
};

  
  
  
  
  
  
  