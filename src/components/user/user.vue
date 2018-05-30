<template>
	<div class="userbox">
		<div class="userinfo-box clearfix">
			<img class="usericon" src="static/usericon.jpg"/>
			<div class="userinfo">
				<button>登录</button>
				<p>累计阅读：<span>{{time}}</span></p>
			</div>
		</div>
		<div>
		  <grid>
		    <grid-item  v-for="(item,index) in list" :label="item.name" :key="index">
		      <img :src="item.src">
		    </grid-item>
		  </grid>
		</div>
		<div >
		  <group title="个人中心">
	        <cell is-link>
	          <span slot="title" style="color:green;"><span style="vertical-align:middle;">我的消息</span> <badge text="1"></badge></span>
	        </cell>
	        <cell title="我的收藏" is-link></cell>
	        <cell title="我的笔记" is-link></cell>
	        <cell title="我的分享" is-link>
	        </cell>
	        <cell title="我的评论" is-link></cell>
	      </group>
		</div>
	</div>
</template>
<script>
import { Cell, CellBox, CellFormPreview, Group, Badge,Grid, GridItem} from 'vux'
export default{
  name:'user',
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,
    Grid,
    GridItem
  },
  data(){
  	return {
  		list:[{name:'礼包',src:'static/box.png'},
  		{name:'消息',src:'static/msg.png'},
  		{name:'下载',src:'static/arrow.png'},
  		{name:'钱包',src:'static/bag.png'}],
  		time:0,
  	}
  },
  computed:{
  	userName:{
  		get:function(){
  			var uname = '';
  			return uname
  		},
  		set:function(){}
  	}
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
			button{
				background: transparent;
				border:0;
				color: #555;
				font-weight: bold;
				font-size: 1.35em;
				margin-top: 1.2em;
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