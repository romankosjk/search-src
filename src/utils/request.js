import axios from 'axios';

const service = axios.create({
  baseURL: 'https://registry.npmjs.org',
  timeout: 5000,
});

// response interceptor
service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.message) {
      return Promise.reject();
    }
    console.log(`err${error}`);
    return Promise.reject(error);
  },
);

export default service;
