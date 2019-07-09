<template>
  <div>
    <div>我是信息页</div>
    <button @click="test">totest</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    test(){
      // this.$router.push("/test")
      this.$router.push({path:'/test',query:{id:'1122334'}})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
s