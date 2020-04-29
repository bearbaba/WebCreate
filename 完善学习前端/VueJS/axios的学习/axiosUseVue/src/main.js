import Vue from 'vue';
import App from './App';
// eslint-disable-next-line import/first
import axios from 'axios';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>',
});

axios({
  url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
},
).then((res) => {
  // eslint-disable-next-line no-console
  console.log(res);
});

axios
  .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then((res) => {
    // eslint-disable-next-line no-console
    console.log(res);
  });
