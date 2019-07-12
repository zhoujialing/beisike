import Vue from 'vue'
import Router from 'vue-router'
import global from "@/core/global"
// console.log(global.getParam())
Vue.use(Router)

 const routers=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      // 重定向 如果是/ 显示info页
      redirect: "info",
      children:[
        {
          path:"info",
          name: 'info',
          meta:{
            keepAlive:true
          },
          //keepAlive true 禁止重复加载  false不禁止
          component: resolve => require(['@/components/main/info'], resolve)
        },
        {
          path:"news",
          name: 'news',
          component: resolve => require(['@/components/main/news'], resolve),
        },
        {
          path:"test",
          name: 'test',
          component: resolve => require(['@/components/main/test'], resolve)
        }
      ]
    }
  ]
})

export default routers
