<template>
  <div>
    <ul>
      <li v-for="(item,index) in routerList" :key="index">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerList: [
        { path: "/info", name: "信息页" },
        { path: "/news", name: "新闻页" },
        { path: "/test", name: "测试页" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  overflow: hidden;
}
li{
  list-style: none;
  float: left;
  margin-left: 20px;
}
</style>
