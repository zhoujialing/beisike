<template>
  <div>
    <div>我是信息页</div>
    <div class="box">
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$global.getParam())  //{name: "Msea", sex: "111"}
    // console.log(this.$apis)
    // this.$apis.getTopics().then((res)=>{
    //   console.log(res);
    // })
    // console.log()
    //.then((res)=>{
    //   console.log(res);
    // })
    //  this.$apis.getTopics()
    // axios.all([this.$apis.getTopics(),this.$apis.getItem()]).then(
    //   axios.spread(function(acct, perms) {
    //     // 两个请求现在都执行完成
    //     console.log(acct,permss)
    //   })
    // );
    // console.log("OK")
    // this.$apis.getIndexData().then((res)=>{
    //   console.log(res);
    // })
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  width: r(100);
  height: r(100);
  background: red;
}
</style>
