import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      count:0,
      num:2
  },
  mutations: {
      //count   += num
      add(state,num){
          state.count+=num;
      },
      // count--
      reduce(state){
          state.count--;
      }
  },
  getters:{
      sum(state){
          return state.count*state.num;
      }
  },
  actions: {
      addAction({commit}){
          setTimeout(()=>{
              //最后调用mutations中的方法修改state
              commit('add',100);
          },1000)
      }
  },
});
