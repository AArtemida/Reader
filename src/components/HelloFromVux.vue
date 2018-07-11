<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1 @click="ajaxFun">click </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>

    <div style="padding: 20px;">
    	<p @click="test($event)" class="abc">click there</p>
    	router
    	<router-view name="a"></router-view>
    	<router-view ></router-view>
    	<router-link :to="{ name: 'user'}">User</router-link>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  created () {
    this.$method()
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods:{
  	ajaxFun:function(){
  		this.$ajax({
		  method: 'post',
		  url: '/user',
		  data: {}
		})
		.then(res => {
		 console.log(res)
		})
		.catch(err => {
		 console.log(err)
		})
	},
	test(e){
		e.target.className +=' bbb';
	}
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
