<template>
  <div class="home">
    <h2>home</h2>
    <!-- 直接获取state数据 -->
    <p>user:{{$store.state.user}}</p>
    <!-- mapState辅助函数 -->
    <p>mapState:{{user}}--</p>
    <p>---{{count}}---</p>
    <button @click='add'>+</button>
    <button @click='change'>修改user</button>
    <hr>
    <HelloWorld/>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import { CHANGECOUNT } from '../store/mutation-types'
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  //计算属性
  computed:{
    ...mapState(['user','count']),//数组里面直接写state里面变量名
    ...mapState({
       myuser:'user',//重新命名
    })
  },
  methods:{
    //mapMutations赋值函数
    // ...mapMutations(['changeUser','changeCount']),
    ...mapMutations(['changeUser',CHANGECOUNT]),
    add(){
      //触发store里面提供的mutations
      console.log(this);
      //commit()触发你的mutations
      this.$store.commit(CHANGECOUNT,100)
    },
    change(){
      // this.$store.commit('changeUser',{user:'jack'})
      this.changeUser({
        user:'啦啦啦啦啦'
      })
    }
  },
  // computed:mapState({
  //   //箭头函数可使代码更简练
  //   user:state=>state.user,
  //   //传字符串参数 'count' 等同于 `state => state.count`
  //   myuser:'user',
  //   //为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   userState(state) {
  //     return state.user + 'lllala'
  //   }
  // }),
  components: {
    HelloWorld
  }
}
</script>
