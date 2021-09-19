import { CHANGECOUNT } from './mutation-types';
export default {
    [CHANGECOUNT](state, payload) {
        state.count += payload;
    },
    changeUser(state, {
        user
    }) { //对象{user:''}
        state.user = user;
    },
    changeUserinfo(state, payload) {
        // state.userinfo.uname = payload.user
        //添加一个属性
        // state.userinfo.desc=payload.desc;//视图不同步更新数据
        //方法1：vue.set(对象,属性,值)
        // Vue.set(state.userinfo,'desc',payload.desc)
        //方法2：
        state.userinfo = {
            ...state.userinfo,
            ...{
                desc: payload.desc
            }
        }
        //方法3： Object.assgin()
    },
    //设置轮播图数据
    setBanner(state, arr) {
        state.banner = arr;
    }
}