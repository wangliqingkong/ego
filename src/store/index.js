import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import centerModule from './modules/centerModule';
import shopModule from './modules/shopModule';
Vue.use(Vuex)

//创建store仓库
const store = new Vuex.Store({
    //状态--数据
    state,
    //修改state的函数事件
    mutations,
    //操作mutations 异步请求 
    actions,
    //计算属性 缓存state数据
    getters,
    //分模块写存储store仓库: 1. 个人信息数据  2. 购物车数据  3. 城市切换 
    modules:{
        centerModule,
        shopModule,
    }

})
//导出
export default store
  