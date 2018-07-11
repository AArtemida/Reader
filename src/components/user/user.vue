<template>
	<div class="userbox">
		<div class="userinfo-box clearfix">
			<img class="usericon" :src="userObj&&userObj.icon==''?'static/usericon.jpg':userObj.icon"/>
			<div class="userinfo">
				<x-button mini plain link="/login" v-if="!userObj">登录</x-button>
				<p class="username" v-else>{{userObj.userName}}</p>
				<p>累计阅读：<span v-text="userObj?userObj.readTime:0"></span></p>
			</div>
		</div>

		<div>
		  <grid>
		    <grid-item  v-for="(item,index) in list" :label="item.name" :key="index">
		      <img :src="item.src">
		    </grid-item>
		  </grid>
		</div>
		<div>
		  <group title="个人中心">
	        <cell is-link :style="{color:selectType==0?'green':''}">
	          <span slot="title">
	          <span style="vertical-align:middle;">我的消息</span> <badge text="1"></badge></span>
	        </cell>
	        <cell title="我的收藏" is-link :style="{color:selectType==1?'green':''}"></cell>
	        <cell title="我的笔记" is-link :style="{color:selectType==2?'green':''}"></cell>
	        <cell title="我的分享" is-link :style="{color:selectType==3?'green':''}">
	        </cell>
	        <cell v-show="userObj" title="退出登录" style="color:#d72b2b;" @click.native="logout"></cell>
	      </group>
		</div>
		<!-- <div class="bground" v-show="!userObj"></div> -->
	</div>
</template>
<script>
import { Cell, CellBox, CellFormPreview, Group, Badge,Grid, GridItem, XButton, Loading, TransferDomDirective as TransferDom } from 'vux'
export default{
  name:'user',
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,
    Grid,
    GridItem,
    XButton,
    // Loading,
  },
  created(){
  	// console.log(localStorage.getItem('user'))
  },
  directives: {
    TransferDom
  },
  data(){
  	return {
  		list:[{name:'礼包',src:'static/box.png'},
  		{name:'消息',src:'static/msg.png'},
  		{name:'下载',src:'static/arrow.png'},
  		{name:'钱包',src:'static/bag.png'}],
  		selectType:0,
  	}
  },
  computed:{
  	userObj:{
  		get:function(){
  			var obj = localStorage.getItem('user');
  			if(typeof obj != 'undefined'){
  				obj = JSON.parse(obj)
  			}else{
  				obj = null;
  			}
  			return obj;
  		},
  		set:function(){}
  	}
  },
  methods:{
  	clickType:function(type){
  		console.log(type)
  		if(typeof type != 'undefined'){
  			this.selectType = type;
  		}
  	},
  	logout(){
  		localStorage.clear();
  		this.showLoading ();
  		setTimeout(() => {
       		this.$router.push({ path: '/login' })
        }, 1000);
  	},
  	showLoading () {
      this.$vux.loading.show({
        text: 'Loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
      }, 2000)
    },
  }
}
</script>
<style scoped lang="less">

	.usericon{
		border-radius: 50%;
		width:5em;
		height:5em;
		margin-top: 1em;
		float: left;
	}
	.userinfo-box{
		background: url(/static/bg6.jpg);
		padding:1em 2em;
		height:9.15em;
		box-sizing: border-box;

		.userinfo{
			float: left;
			margin-left: 1.65em;
			p{font-size: 0.75em;margin-top:@margin-width;}
			span{color:#68dff0;}
			button,.username{
				background: transparent;
				border:0;
				color: #555;
				font-weight: bold;
				font-size: 1.35em;
				margin-top: 1.2em;
				border:0px;
				padding-left: 0;
				&:hover{color:#68dff0;outline:none;}
			}
		}
	}
	.weui-grid{
		text-align:center;
		padding:10px;

		img{
			width: 44%;
		}
	}
</style>