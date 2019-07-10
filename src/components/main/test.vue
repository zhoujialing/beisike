<template>
  <div>
    <div>我是测试页</div>
    <item1></item1>
    <button v-test>test</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
