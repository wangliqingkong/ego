export default  {//个人信息数据
    namespaced: true,//模块内部的 action、mutation 和 getter 是注册在局部模块空间的
    state:{
        centerUser:{
            uname:'张三三',
            level:'白银'
        },
        num:200
    },
    mutations:{
        setUser(state,payload){
            state.centerUser.uname = payload;
        }
    },
    actions:{
        setactionUser({dispatch, commit, getters, rootGetters },payload){
            //--- 
            commit('setUser',payload);//当前模块的mutations 
            //触发全局的mutations 
            commit('setBanner',[1,2,3,4],{root:true})

            //触发actions方法
            dispatch('demoaction');
            //触发全局的
            dispatch('changeActionUser',{user:'触发全局actions'},{root:true})


        },
        demoaction(){
            console.log('123');
        },
        //在带命名空间的模块注册全局 action
        someAction: {
            root: true,
            handler (namespacedContext, payload) { 
                
            } 
          }

    },
    getters:{
        //rootState 和 rootGetters 会作为第三和第四参数传入 getter
        mynum(state,getters,rootState,rootGetters){
            console.log('getters',getters);
            console.log('rootState',rootState);
            console.log('rootGetters',rootGetters);
            return state.num*100;
        },
        child(){
            return 123
        }
    }
}