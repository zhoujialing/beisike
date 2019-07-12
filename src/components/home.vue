<template>
  <div>
    <lay_head></lay_head>
    <keep-alive>
         <router-view v-if="$route.meta.keepAlive"/>
     </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"/>
     
      <!-- keepAlive true 禁止重复加载  false不禁止-->
     <!-- <div class="box" v-if="$route.meta.name=='ok'?true:false"></div> -->
  </div>
</template>

<script>
import lay_head from "@/components/layout/head"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
      this.$eventHub.$on("test",(res)=>{
        alert(res);
      });
  },
  components:{
    lay_head
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
