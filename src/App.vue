<template>
  <div id="app">
	<MyHeader v-if="$route.meta.title != 'Login'"></MyHeader>
	<!-- <router-view name="header"></router-view> -->
<!-- 	<router-link to="/detail">路由4</router-link> -->
	<router-view></router-view>

    <MyFooter v-if="$route.meta.title != 'Login'"></MyFooter>
    <!-- <router-view name="footer"></router-view> -->
  </div>
</template>

<script>
import MyHeader from './components/MyHead'
import MyFooter from './components/MyFooter'

export default {
  name: 'app',
  components:{
  	'MyHeader': MyHeader,
  	'MyFooter': MyFooter,
  },
  watch:{
  	'$route' (to,from){
  		// console.log(to.meta.title)
  	}
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
    word-wrap: break-word;
    font: 16px/1.5 Helvetica, Arial;
    //这里是设置字体，Helvetica字体在移动端各系统都支持（都不支持微软雅黑）
    -webkit-text-size-adjust: none;
    //设置文本不会放大，普通网页在移动端打开文本是会跟随网页结构缩放的
}
body *{
    -webkit-tap-highlight-color: transparent;
    //在一些手机上，如iphone，点击按钮等元素会出现点击态的背景色，设置为透明就看不出来了
    -webkit-user-select:none;
    //设置元素内的文字及其子元素将不会被选中
}
body {
  background-color: #fbf9fe;
}
.clearfix {
    zoom: 1;
}
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.weui-cells{font-size:16px !important;}
[v-cloak]{
    display: none;
}
</style>
