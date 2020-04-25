import Vue from 'vue';
import Vuex from 'vuex';


// 安装vuex插件
Vue.use(Vuex);

// 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    stuList: [
      {
        name: '小明',
        score: 87,
      },
      {
        name: '小红',
        score: 98,
      },
      {
        name: 'Mike',
        score: 100,
      },
      {
        name: '小赵',
        score: 95,
      },
      {
        name: '小晓',
        score: 75,
      },
    ],
  },
  mutations: {
    increment(state) {
      state.counter -= 1;
    },
    subtraction(state) {
      state.counter += 1;
    },
  },
  getters: {
    selectScoreSurpass80() {
      // eslint-disable-next-line no-unused-expressions
      state => state.stuList.score > 80;
    },
  },
  modules: {

  },
});

// 导出store插件
export default store;
