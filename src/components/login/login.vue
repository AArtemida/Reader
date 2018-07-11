<template>
  <div class="loginbox">
  	<div class="topbox">
  		<div class="logo">Reader</div>
  	</div>
  	<div class="form">
  		<form>
  			<!-- <div><label>用户名</label><input type="text" name="username"></div>
  			<div><label>密码</label><input type="text" name="pass"></div> -->
  			<x-input title="用户名" type="text" placeholder="用户名" v-model="userName"
        		@on-enter=""></x-input>
    		<x-input title="密码" type="text" placeholder="密码" v-model="password"
    			@on-enter=""></x-input>
    		<x-button class="login" type="primary" action-type="button" @click.native="login">登录</x-button>
  		</form>
  		<div class="other">
  			<span>忘记密码？</span>
  			<span style="float: right;">注册</span>
  		</div>
  		<div class="return_button" @click="goback"><x-icon class="back" type="ios-arrow-back" size="30"></x-icon></div>
  	</div>
  </div>
</template>

<script>
import { XInput, XButton, Alert, TransferDomDirective as TransferDom } from 'vux'

export default {
  data(){
  	return {
  		userName:'',
  		password:'',
  	}
  },
  directives: {
    TransferDom
  },
  components: {
    XInput,
    XButton,
    Alert
  },
  methods:{
  	goback(){
  		history.go(-1);
  	},
  	login(){
  		var _this = this, userNum = 0,hasError = false,theUser='';
  		if(_this.userName != '' && _this.password != ''){
  			_this.userInfo.forEach(function(val){
  				if(val.userName == _this.userName){
  					if(val.password == _this.password){
  						userNum ++;
  						theUser = val;
  					}else{
  						hasError = true;
  					}
  				}
  			})
  			if(userNum > 0){
  				_this.showPlugin('登录成功！');
  				localStorage.setItem('user',JSON.stringify(theUser));
  				setTimeout(() => {
		       		this.$router.push({ path: '/' })
		        }, 2000);
  			}else if(hasError){
  				_this.showPlugin('密码错误！')
  			}else{
  				_this.showPlugin('登录失败！')
  			}
  		}
  	},
  	showPlugin (text,alert) {
      this.$vux.alert.show({
        title: alert||'提示',
        content: text||'',
        onShow () {
        },
        onHide () {
        }
      })
    },
    showPluginAuto (text,alert) {
      this.showPlugin(text,alert);
      setTimeout(() => {
        this.$vux.alert.hide()
      }, 3000)
    },
  }
}
</script>

<style scoped lang="less">
	.topbox{
		height:15em;
		background: #ffd777;
		position:relative;
		.logo{
			background:#fff;
			width: 6em;
			margin: 0 auto;
			border-radius: 8px;
			position: relative;
			top:3.8em;
			line-height: 2.6em;
			text-align: center;
			color: #ffd777;
			font-size: 1.6em;
			font-weight: blod;
		}
	}
	.form{
		padding:1.6em;
		.vux-x-input{margin:1em 0;}
		.login{
			border-radius:20px;
			background:#ffd777;
			margin-top:1.6em;
		}
		.weui-cell:before{display:none;}
		.other{
			color:#aaa;
			font-size:0.92em;
			padding:1em 0.5em;
		}
	}
	.return_button{
		width:2.3em;
		height:2.3em;
		text-align:center;
		border-radius:50%;
		background:#f6c654;
		color:#fff;
		margin-top:2em;
		.back{
			fill: #fff;
			margin-top: 3px;
		}
	}
</style>