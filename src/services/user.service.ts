import axios from 'axios';
import authHeader from './auth-header';
import { API_URL } from '../config';
import { TUserDto } from './types';

class UserService {
  createUser(userDto: TUserDto) {
    return axios.post(`${API_URL}/users`, userDto, {
      headers: authHeader(),
    });
  }

  getAllUsers() {
    return axios.get(`${API_URL}/users`, { headers: authHeader() });
  }
}
export default new UserService();
