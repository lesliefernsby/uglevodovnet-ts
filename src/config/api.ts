/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { refreshHeader } from '../services/auth-header';
import { refreshToken } from '../redux/slices/auth.slice';
import { store } from '../redux/store';

export const API_URL = 'http://84.201.141.37:8080';

export const axiosPublic = axios.create({ baseURL: API_URL });
export const axiosPrivate = axios.create({ baseURL: API_URL });

axiosPrivate.interceptors.request.use(
  async config => {
    const user = store?.getState()?.auth?.user;

    const currentDate = new Date();
    if (user?.tokens?.accessToken) {
      const decodedToken: { exp: number } = jwt_decode(
        user?.tokens.accessToken
      );
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const response = await axiosPublic.post(`/auth/refresh`, null, {
          headers: refreshHeader(),
        });
        await store.dispatch(
          refreshToken(response.data.accessToken, response.data.refreshToken)
        );
        if (config?.headers) {
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        }
      }
    }
    return config;
  },
  error => Promise.reject(error)
);
