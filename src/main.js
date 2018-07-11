// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import { AlertPlugin, ToastPlugin, LoadingPlugin } from 'vux'
import Detail from './components/detail/BookDetail'
import myindex from './components/index/Myindex'
import List from './components/list/MyList'
import MyUser from './components/user/user'
import Login from './components/login/login'

import MyHeader from './components/MyHead'
import MyFooter from './components/MyFooter'

import hotList from './util/util.js'
import userInfo from './util/userinfo.js'

import axios from 'axios'

import "./assets/fonts/iconfont.css";

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.use(VueRouter)

const routes = [{
  path: '/',
  meta: {
      title: 'Reader'
   },
  component: myindex,
 //  components:{
	//     header: MyHeader,
	//     footer: MyFooter,
	//     content: myindex
	// }
},
{
  path: '/detail/:id',
  name:'detail',
  meta: {
      title: 'Detail'
   },
  component: Detail,
},
{
  path: '/list/:type',
  name:'list',
  meta: {
      title: 'List'
   },
  component: List,
},
{
  path: '/user/:type',
  name:'user',
  meta: {
      title: 'User'
   },
  component: MyUser,
},
{
  path: '/login',
  name:'login',
  meta: {
      title: 'Login'
   },
  component: Login,
},
{
  path: '/test',
  name:'test',
  meta: {
      title: 'Test'
   },
  component: Home,
  children: [{
  	path: ":id",
  	component:{template: "<div style='color:red'>user: {{ $route.params.id }}</div>"}
  }]
}]

const router = new VueRouter({
  routes
})

/*页面切换的滚动高度和title*/
router.beforeEach((to, from, next) => {
	if(typeof to.meta.title != 'undefined'){
	  window.document.title = to.meta.title;
	}
  next()
})
router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});

/*全局定义ajax*/
Vue.prototype.$ajax = axios

FastClick.attach(document.body)

Vue.config.productionTip = false

/*定义全局方法*/
Vue.prototype.$method = function () {
	console.log('my dev success')
}
Vue.prototype.$check = function (val) {
	if(typeof val == 'undefinwd' || val == null || JSON.stringify(val) == '{}' || JSON.stringify(val) == '[]'){
		val = '';
	}
	return val;
}

/*全局引入json*/
Vue.use(hotList);
Vue.use(userInfo);
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
