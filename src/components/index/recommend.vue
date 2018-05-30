<template>
  <div class="recommend_box">
    <divider>热门推荐</divider>
    <flexbox :gutter="0" wrap="wrap">
      <flexbox-item :span="1/3" v-for="(item,index) in booklist" :key="item.id">
      	<router-link :to="'/detail/'+item.id">
      	<div class="flex-demo">
          <img :src="item.img" :alt="item.title">
          <p class="booktitle" v-text="item.title"></p>
          <p class="author" v-text="item.author"></p>
        </div></router-link>
  	  </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem, Divider } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider
  },
  data(){
    return {
      booklist:this.hotList
    }
  }
}
</script>
<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.recommend_box{
  margin: @margin-width;

  .flex-demo {
    text-align: left;
    color: #fff;
    border-radius: 4px;
    background-clip: padding-box;
    height: 15.9em;
    overflow: hidden;
    color: #000;
    margin: @margin-width;
    font-size: 0.85em;

    .author{
      font-size: 0.65em;
      color:#888;
    }
    img{
      width:100%;
      max-height:80%;
      background: @blue;
    }
  }
}
</style>