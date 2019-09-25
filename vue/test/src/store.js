import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存
  state: {
      count:0,
      num:2
  },
  //改
  mutations: {
      add(state){
        state.count++;
      },
      reduce(state){
        state.count--;
      }
  },
  //算
  getters:{
    sum(state){
        return state.count*state.num;
    }
  },
  //异步
  actions: {

  }
})
