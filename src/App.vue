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
