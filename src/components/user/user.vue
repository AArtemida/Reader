<template>
	<div class="userbox">
		<div class="userinfo-box clearfix">
			<img class="usericon" src="/static/list2.jpg"/>
			<div class="userinfo">
				<button>登录</button>
				<p>
				</p>
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
  		{name:'钱包',src:'static/bag.png'}]
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
		float: left;
	}
	.userinfo-box{
		background: url(/static/bg6.jpg);
		padding:1em 2em;
		height:9.65em;
		box-sizing: border-box;

		.userinfo{
			float: left;
			margin-left: @margin-width;

			button{
				background: transparent;
				border:0;
				font-weight: bold;
				font-size: 1.25em;
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