<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>user:{{$store.state.user}}</p>
    <p>userinfo:{{userinfo}}</p>
    <button @click='change'>修改存在属性</button>
    <button @click="update">操作actions修改user</button>
    <button @click="update2">mapActions操作actions修改user</button>
    <button @click="bannerData">获取轮播</button>
    <hr>
    <p>获取getters数据：{{ $store.getters.money }}</p>
    <p>getters:{{ money}}</p>
  </div>
</template>

<script>
import { mapState,mapActions,mapGetters } from 'vuex'
export default {
    computed:{
      ...mapState(['userinfo']),
      ...mapGetters(['money'])
    },
    methods:{
      ...mapActions(['changeActionUser','getBanner']),
      change(){
        this.$store.commit('changeUserinfo',{
          desc:'李思思喜欢他了'
        })
      },
      update(){
        this.$store.dispatch('changeActionUser',{
          user:'bbb-cccc'
        })
      },
      update2(){
        this.changeActionUser({
          user:'新的数据mapActions'
        })
      },
      bannerData(){
        this.getBanner()
      }
    },
    mounted(){
      console.log(this);
    }
}
</script>