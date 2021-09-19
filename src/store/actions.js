import axios from 'axios';
const actions = {
    changeActionUser(context,payload){//context对象={state,commit,getters}
        //上面可以处理功能
        context.commit('changeUser',payload);//payload={user:''}
    },
    //模拟异步请求
    getBanner({commit}){
       axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
       .then(res=>{
           console.log(res.data);
           //操作mutations 
           commit('setBanner',res.data.banner)
       }) 
    }
}

export default actions