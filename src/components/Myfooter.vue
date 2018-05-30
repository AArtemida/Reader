<template>
  <div id="footer">
	<tabbar v-model="changeIndex">
      <tabbar-item show-dot link="/">
        <x-icon class="tabicon" type="ios-ionic-outline" size="30" slot="icon" :class="index==0?'select':''"></x-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/list/1">
        <x-icon class="tabicon" type="ios-heart" size="30" slot="icon" :class="index==1?'select':''"></x-icon>
        <span slot="label">排行榜</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/user/2">
        <x-icon class="tabicon" type="ios-star" size="30" slot="icon" :class="index==2?'select':''"></x-icon>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  data(){
  	return {
  		index:0
  	}
  },
  created () {
    this.getIndex()
  },
  computed:{
  	changeIndex:{
  		get: function () {
	      var type = this.$route.params.type;
  		  if(typeof type != 'undefined'){
  			this.index = parseInt(type);
  		  }else{
  			this.index = 0;
  		  }
  		  return this.index;
	      },
	    set: function () {}
  	}
  },
  methods:{
  	getIndex:function(){
  		console.log(this.$route.params.type)
  	}
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style scoped lang="less">
#footer{min-height: 55px;}
.weui-tabbar{position: fixed;}
.tabicon{
	fill: #666;
	&.select{
		fill: #68dff0;
	}
}
</style>
