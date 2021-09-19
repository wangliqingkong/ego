## vuex
1. 介绍：
   Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态

2. vue组件之间数据传递
   1. props 父传子
   2. 自定义事件  子传父
   3. $parent 
   4. $children 
   5. $root
   6. ref  $refs
   7. provide inject
   8. $attrs  
   9. vuex 

3. 什么情况下我应该使用 Vuex
   如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。

## vuex使用
1. 安装     
   npm install vuex --save

2. main.js导入vuex
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

3. store（仓库） 
    每一个 Vuex 应用的核心就是 store（仓库）.
    1. Vuex 的状态存储是响应式的
    2. 你不能直接改变 store 中的状态,使用vuex提供的方法

4. 创建仓库
   1. 引入vuex  Vue.use(Vuex)
   2. const store = new Vuex.Store({ 
       //仓库数据
        state:{

        },
        //修改的方法
    })
    3. 挂载vue实例
       new Vue({
        router,
        store,
        render: h => h(App)
        }).$mount('#app')

## state 
1. 获取state数据
   1. 方法1:直接获取
       $store.state.user 
      方法2：计算属性获取（知道了）
        computed: {
            count () {
                return this.$store.state.count
            }
        }   
    2. mapState 辅助函数 
       import { mapState } from 'vuex'
       computed: {
           ...mapState(['user','count']),
           ...mapState({
               myuser:'user'
           })
       }

## Mutation
1. 作用：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
2. 说明：修改state数据的唯一的方法
3. 语法：
   //修改state的函数事件
    mutations:{
        changeCount(state,payload){
            state.count += 10;
        },
        changeUser(state){
            state.user='llalala'
        }
    } 
4. 使用mutations 
    1.  直接获取方法
        this.$store.commit('changeCount',100) 
    2. mapMutations 辅助函数
        import { mapMutations } from 'vuex'
        methods:{
            ...mapMutations(['changeUser','changeCount']),
            change(){
                this.changeUser()
            }
        }
5. 使用常量替代 Mutation 事件类型
   
6. Mutation 需遵守 Vue 的响应规则
   1. 最好提前在你的 store 中初始化好所有所需属性。
   2. 当需要在对象上添加新属性时，你应该 使用 Vue.set(obj, 'newProp', 123)

7. Mutation 必须是同步函数
    一条重要的原则就是要记住 mutation 必须是同步函数。



## Action
1. 作用：
    Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。
2. 语法
     actions: {
        increment (context,payload) {
            context.commit('increment',payload)
        }
    }

3. 操作actions 
   1. 直接操作
      $store.dispatch('action函数名',payload)

    2. mapActions辅助函数
       methods:{
            ...mapActions(['changeActionUser','getBanner']),
            bannerData(){
                this.getBanner()
            }
       }


## Getter
1. 作用：是 store 的计算属性 缓存state数据 
2. 语法：
    //计算属性 缓存state数据
    getters:{
        money:function(state){
            return state.count*0.657+'美元';
        }
    }
    
3. 获取getters 
    1. 直接获取
      $store.getters.money 
    2. mapGetters辅助函数
         computed:{
            ...mapState(['userinfo']),
            ...mapGetters(['money'])
        }, 

    
## Module 
1. 作用：Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块
2. 语法：
  const store = new Vuex.Store({
        modules: {
            a: {
                state:{

                },
                mutations:{

                },
                actions:{}
            },
            b: moduleB
        }
    })

3. 使用


4. 获取模块数据
   1. state数据
      1. $store.state.模块名字.变量
      2. computed:{
            //获取模块数据：mapState('模块名字',['变量',...])
            ...mapState('centerModule',['num','centerUser']),

        },
    
    2. getters数据
       1.  $store.getters["centerModule/mynum"] 
       2.   computed: {
                //获取模块数据：mapState('模块名字',['变量',...])
                ...mapState("centerModule", ["num", "centerUser"]),
                ...mapGetters('centerModule',['mynum']),
            },
    3. mutations /actions
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

5. 在带命名空间的模块内访问全局内容（Global Assets）




## 项目结构
1. Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：
        应用层级的状态应该集中到单个 store 对象中。
        提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
        异步逻辑都应该封装到 action 里面。

2. 如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件
    ├── index.html
    ├── main.js
    ├── api
    │   └── ... # 抽取出API请求
    ├── components
    │   ├── App.vue
    │   └── ...
    └── store
        ├── index.js          # 我们组装模块并导出 store 的地方
        ├── actions.js        # 根级别的 action
        ├── mutations.js      # 根级别的 mutation
        └── modules
            ├── cart.js       # 购物车模块
            └── products.js   # 产品模块
