<template>
  <div>
    <div>我是新闻页</div>
    <h1>名字:{{name}}</h1>
    <h2>单价:{{price}}</h2>
    <h3>总价:{{count}}</h3>
    <div>
      <button @click="add">+</button>
      <span>数量:{{num}}</span>
    </div>
    <h1>Vuex_actions测试</h1>
    <button @click="test">test</button>
    <hr>
    <div v-show="isTopic" style="width:100px;height:100px;background:red"></div>
    <button @click="test2">异步</button>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    // console.log(mapState(["name"]))  //{name:fn}
    // let testObj={name:"Msea"}
    // let obj={...testObj}
    // 对象的深度拷贝
    // 对象比较是比较内存地址

    // function test(a,b,c){
    //   console.log(a,b,c);
    // }
    // var arr=[1,2,3]
    // var testArr=[];
    // testArr.push(...arr);
    // console.log(testArr);
    // test(...arr);
  },
  // computed:{name(){}},
  computed: {
    // Vuex State
    ...mapState(["name", "num", "price","isTopic"]),
    //Vuex Getters
    ...mapGetters(["count"])
  },
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["test","test2"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
