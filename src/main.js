// 定义组件
import Vue from "vue"
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import Head from "./components/head.vue"
import Foot from "./components/foot.vue"
import Index from "./components/index.vue"
import List from "./components/list.vue"
import Other from "./components/other.vue"
import Consult from "./components/consult.vue"
import Person from "./components/person.vue"
Vue.config.debug = true;
Vue.use(VueRouter)
Vue.use(VueResource)
// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({})

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter()

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
"/index":{
  name:"viewIndex",
  component:Index
},
"/list":{
  component:List
},
"/other":{
  component:Other
},
"/consult":{
  component:Consult
},
"/person":{
  component:Person
}
})
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
  '*':"/index"//重定向任意未匹配路径到/index
});

Vue.component('header-component', Head)
Vue.component('footer-component',Foot)
router.start(App, "#app")
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。

