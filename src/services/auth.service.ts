import { axiosPublic } from '../config';

class AuthService {
  async login(login: string, password: string) {
    const response = await axiosPublic.post(
      `/auth/login`,
      {
        login,
        password,
      },
      {
        withCredentials: false,
      }
    );
    if (response.data.tokens.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  async refreshToken(accessToken: string, refreshToken: string) {
    const user = this.getCurrentUser();
    user.tokens.accessToken = accessToken;
    user.tokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  }

  logout() {
    localStorage.removeItem('user');
  }
  // to implement
  // register(username: string, email: string, password: string) {
  //   return axios.post(API_URL + 'signup', {
  //     username,
  //     email,
  //     password
  //   });
  // }

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

export default new AuthService();
