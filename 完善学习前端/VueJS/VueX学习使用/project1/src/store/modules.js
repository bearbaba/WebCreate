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
  },
  getters: {
    selectColor(state) {
      return state.thing.filter(s => s.colorName === 'red');
    },
  },
};
