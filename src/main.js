// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import { AlertPlugin, ToastPlugin } from 'vux'
import Detail from './components/detail/BookDetail'
import myindex from './components/index/Myindex'
import List from './components/list/MyList'
import MyUser from './components/user/user'
import hotList from './util/util.js'
import "./assets/fonts/iconfont.css";

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: myindex
},
{
  path: '/detail/:id',
  name:'detail',
  component: Detail,
},
{
  path: '/list/:type',
  name:'list',
  component: List,
},
{
  path: '/user/:type',
  name:'user',
  component: MyUser,
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$method = function () {
	console.log('my dev success')
}
Vue.prototype.$check = function (val) {
	if(typeof val == 'undefinwd' || val == null || JSON.stringify(val) == '{}' || JSON.stringify(val) == '[]'){
		val = '';
	}
	return val;
}
Vue.use(hotList);
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
