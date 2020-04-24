import Vue from 'vue';
import Vuex from 'vuex';


// 安装vuex插件
Vue.use(Vuex);

// 创建对象
const store = new Vuex.Store({
  state:{
    counter:0,
  },
  mutations:{

  },
  getters:{

  },
  modules:{

  }
});

// 导出store插件
export default store;
