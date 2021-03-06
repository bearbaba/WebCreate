import Vue from 'vue';
import Vuex from 'vuex';
import { INCREMENT } from './mutation-type';
import { moduleA } from './modules';


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
      {
        name: '小赵',
        score: 68,
      },
    ],
    colorAndName: {
      name: 'sun',
    },
  },
  mutations: {
    [INCREMENT](state) {
      state.counter += 1;
    },
    subtraction(state) {
      state.counter -= 1;
    },
    incrementNumber(state, num) {
      state.counter += num;
    },
    addNewStu(state, payload) {
      state.stuList.push({ name: payload.newStu, score: payload.newScore });
    },
    addColor(state) {
      Vue.set(state.colorAndName, 'color', 'yellow');
    },
    deleteName(state) {
      Vue.delete(state.colorAndName, 'name');
    },
    changeName(state) {
      state.colorAndName.name = 'moon';
    },
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    scoreExceed80(state) {
      return state.stuList.filter(s => s.score > 80);
    },
    stuNumberExceed80(state, getter) {
      return getter.scoreExceed80.length;
    },
    stuExceedNew(state) {
      return newScore => state.stuList.filter(s => s.score > newScore);
    },
  },
  actions: {
    changeName(context, payload) {
      setTimeout(() => {
        context.commit('changeName');
      }, 1000);
      // eslint-disable-next-line no-unused-expressions,no-console
      console.log(payload.message);
      payload.success();
    },
    changeColor(context, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('changeName');
          const res = payload.information;
          resolve(res);
        }, 1000);
      });
    },
  },
  modules: {
    a: moduleA,
  },
});

// 导出store插件
export default store;
