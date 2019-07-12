<template>
  <div>
    <div>我是信息页</div>
    <!-- 读statet   Vue_data -->
    <h1>名字:{{$store.state.name}}</h1>
    <h2>单价:{{$store.state.price}}</h2>
    <!-- 读 getters Vue_computed -->
    <h3>总价:{{$store.getters.count}}</h3>
    <div>
      <!-- 调用  mutations  Vue_methods -->
      <button @click="$store.commit('add')">+</button>
      <span>数量:{{$store.state.num}}</span>
      <h1>Vuex_actions测试</h1>
      <mint_btn @click="$store.dispatch('test')">test</mint_btn>
    </div>

    <div v-show="isTopic" style="width:100px;height:100px;background:red"></div>
    <button @click="test2">异步</button>


    <hr>
    <button @click="getMockData">mock</button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      topic: []
    };
  },
  computed: {
    isTopic() {
      return this.$store.state.isTopic;
    }
  },
  mounted() {
    
  },
  methods: {
    test2() {
      this.$store.dispatch("test2");
    },
    getMockData(){
      // console.log(this.$apis)
      this.$apis.login({uname:'123456',upwd:122446}).then((res)=>{
          console.log(res);
      })
    }
  },
  watch: {
    // isTopic(){
    //   // console.log(this.$store.state.topic);
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box1 {
  width: 100px;
  height: 100px;
  background: red;
}
.box2 {
  width: r(100);
  height: r(100);
  background: yellow;
}
</style>
