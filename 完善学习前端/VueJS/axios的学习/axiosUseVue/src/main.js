import Vue from 'vue';
import App from './App';
// eslint-disable-next-line import/first
// import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { request } from './network/request';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>',
});

// axios({
//   url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
//   params: {
//     page: 1,
//     data: 'cloths',
//   },
// },
// ).then((res) => {
//   // eslint-disable-next-line no-console
//   console.log(res);
// });
//
// axios
//   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//   .then((res) => {
//     // eslint-disable-next-line no-console
//     console.log(res);
//   });
// axios.defaults.timeout = 5000;
// axios.all([
//   axios({
//     url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
//   }),
//   axios({
//     url: 'https://api.66mz8.com/api/qq.state.php',
//     params: {
//       qq: '2200522850',
//     },
//   }),
// ]).then(axios.spread((res1, res2) => {
//   // eslint-disable-next-line no-console
//   console.log(res1);
//   // eslint-disable-next-line no-console
//   console.log(res2);
// }),
// );
//
// const instance = axios.create({
//   baseURL: 'https://api.66mz8.com/api/qq.state.php',
//   timeout: 1000,
// });
//
// instance({
//   params: {
//     qq: '2200522850',
//   },
// }).then((res) => {
//   // eslint-disable-next-line no-console
//   console.log(res);
// });

request({
  params: {
    qq: '2200522850',
  },
}).then((res) => {
  // eslint-disable-next-line no-console
  console.log(res);
}).catch((err) => {
  // eslint-disable-next-line no-console
  console.log(err);
});
