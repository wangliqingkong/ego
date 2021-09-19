export default {
    money:function(state,getters){
        console.log(getters);//获取所有的getters计算属性值
        return state.count*0.657+'美元';
    },
    demo(state){
        return state.user;
    }
}