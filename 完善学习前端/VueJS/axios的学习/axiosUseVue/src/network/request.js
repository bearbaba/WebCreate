import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export,no-unused-vars
export function request(config) {
  // eslint-disable-next-line no-unused-vars
  // return new Promise((resolve, reject) => {
  // eslint-disable-next-line no-unused-vars
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/h8',
    timeout: 10000,
  });

  // eslint-disable-next-line no-shadow
  instance.interceptors.request.use((config) => {
    console.log(config);
    return config;
  }, (error) => {
    console.log(error);
  });

  instance.interceptors.response.use((res) => {
    console.log(res.data);
    return res;
  }, (error) => {
    console.log(error);
  });
  // eslint-disable-next-line no-undef
  return instance(config);
  // .then((res) => {
  //   // eslint-disable-next-line no-console
  //   resolve(res);
  // })
  // .catch((err) => {
  //   // eslint-disable-next-line no-console
  //   reject(err);
  // });
}

