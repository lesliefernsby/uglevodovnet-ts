import axios from "axios";
import { API_URL } from "../config";

class AuthService {
  login(login: string, password: string) {
    return axios
      .post(`${API_URL}/auth/login`, {
        login,
        password
      }, {
        withCredentials: false
      })
      .then(response => {
        if (response.data.tokens.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  
  logout() {
    localStorage.removeItem("user");
  }
  // to implement 
  // register(username: string, email: string, password: string) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

export default new AuthService();
