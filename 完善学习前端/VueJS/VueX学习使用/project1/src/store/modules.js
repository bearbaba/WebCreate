// eslint-disable-next-line import/prefer-default-export
export const moduleA = {
  state: {
    thing: [{
      thingName: 'forest',
      colorName: 'green',
    }, {
      thingName: 'flower',
      colorName: 'red',

    }, {
      thingName: 'sun',
      colorName: 'yellow',
    }, {
      thingName: 'apple',
      colorName: 'red',
    }],
    counter: 100,
  },
  getters: {
    selectColor(state) {
      return state.thing.filter(s => s.colorName === 'red');
    },
    // eslint-disable-next-line no-unused-vars
    getStoreState(state, getter, rootState) {
      return state.thing[0].thingName + rootState.counter;
    },
  },
  mutations: {
    selectName(state, payload) {
      state.thing.push({ thingName: payload.name, colorName: payload.color });
    },
    addRootState(state, payload) {
      state.counter += payload.data;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    decRootStateCounter({ rootState, commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('addRootState', 1000);
          // eslint-disable-next-line no-param-reassign
          rootState.counter += 1000;
          // eslint-disable-next-line no-param-reassign
          resolve('已传递成功');
        }, 1000);
      });
    },
  },

};
