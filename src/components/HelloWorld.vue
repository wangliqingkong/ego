<template>
  <div class="hello">
    <h2>HelloWorld</h2>
    <p>centerMoudle:{{ $store.state.centerModule.centerUser }}</p>
    <p>mapState辅助函数：{{ num }}</p>
    <p>{{ centerUser }}</p>
    <p>getters:{{ $store.getters["centerModule/mynum"] }}</p>
    <p>{{ mynum }}</p>
    <button @click="changeuser">直接mutations</button>
    <button @click="changeuser2">辅助函数mutations</button>
    <button @click="changeuser3">直接actions</button>
    <button @click="changeuser4">辅助函数actions</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    //获取模块数据：mapState('模块名字',['变量',...])
    ...mapState("centerModule", ["num", "centerUser"]),
    ...mapGetters("centerModule", ["mynum"]),
  },
  methods: {
    ...mapMutations("centerModule", ["setUser"]),
    ...mapActions("centerModule", ["setactionUser"]),
    changeuser() {
      this.$store.commit("centerModule/setUser", "修改user1");
    },
    changeuser2() {
      this.setUser("修改user2");
    },
    changeuser3() {
      this.$store.dispatch("centerModule/setactionUser", "3333");
    },
    changeuser4() {
      this.setactionUser("4444");
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
