import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export,no-unused-vars
export function request(config) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-unused-vars
    const instance = axios.create({
      baseURL: 'https://api.66mz8.com/api/qq.state.php',
      timeout: 1000,
      params: {
        qq: '2200522850',
      },
    });
    // eslint-disable-next-line no-undef
    instance(config, baseConfig)
      .then((res) => {
        // eslint-disable-next-line no-console
        resolve(res);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        reject(err);
      });
  });
}
