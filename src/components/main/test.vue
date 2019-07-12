<template>
  <div>
    <div>我是测试页</div>
    <item1></item1>
    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    
  },
  methods:{
      test(){
        this.$eventHub.$emit("test","haha");
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
