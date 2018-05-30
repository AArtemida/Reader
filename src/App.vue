<template>
  <div id="app">
	<MyHeader></MyHeader>
<!-- 	<router-link to="/detail">路由4</router-link> -->
	<router-view></router-view>

    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHead'
// import MySwiper from './components/MySwiper'
import MyFooter from './components/MyFooter'
// import recommend from './components/recommend'

export default {
  name: 'app',
  components:{
  	'MyHeader': MyHeader,
  	'MyFooter': MyFooter,
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
</style>
