<template>
  <div class="myindex">
	<MySwiper></MySwiper>
	<recommend></recommend>
  </div>
</template>
<script>
import MySwiper from './MySwiper'
import recommend from './recommend'
export default {
  name: 'myindex',
  components:{
  	'MySwiper': MySwiper,
  	'recommend': recommend,
  }
}
</script>
<style scoped lang="less"></style>