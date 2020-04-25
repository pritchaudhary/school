import axios from 'axios';

export const getAPIHost = () => process.env.APIHOST || window.location.hostname.replace('app', 'api');

const BaseUrl='http://godaci-api-dev.qdpxpnpm3e.us-east-1.elasticbeanstalk.com/api';
export default function apiClient() {
  const instance = axios.create({
    baseURL: BaseUrl //'http://localhost:2200/api'// `https://${getAPIHost()}`
  });

  let token;

  instance.setJwtToken = newToken => {
    token = newToken;
  };

  instance.getToken = () => token;

  instance.interceptors.request.use(
    conf => {
      if (token) {
        conf.headers.Authorization = `Bearer ${token}`;
      }
      return conf;
    },
    error => Promise.reject(error)
  );

  instance.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error.response ? error.response.data : error)
  );

  return instance;
}
