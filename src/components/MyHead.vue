<template>
  <x-header>
   	<div class="search-bar"><form action="."><div class="search-box"><i class="weui-icon-search"></i>
   		<input type="search" name="search" placeholder="search" autocomplete="off"  v-model="value"></div></form></div>
    <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
  </x-header>
</template>
<script>
import { XHeader, Search} from 'vux'

export default {
  components:{
  	XHeader,
  	Search,
  },
  methods: {

  },
  data () {
    return {
      results: [],
      value: ''
    }
  }
}
</script>
<style scoped lang="less">
.search-bar{
	display: flex;
	box-sizing: border-box;
	position:relative;
	height: 1.8em;
    margin-top: 4px;

	.weui-icon-search{
		position: absolute;
		left: 10px;
		top: 3px;
		line-height: 28px;
	}

	.search-box{
		position: relative;
		padding-left: 40px;
		padding-right: 15px;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		z-index: 1;
	}

	input[type="search"]{
		width: 100%;
		border: 0;
		line-height: 100%;
		height: 100%;
		box-sizing: content-box;
		font-size: 14px;
		background: transparent;
		float: right;
	}
	input[type="search"]:focus{
		outline: none;
	}

	form{
		position: relative;
		-webkit-box-flex: 1;
		flex: auto;
		background-color: #EFEFF4;
		border-radius: 5px;
	}
}
</style>
