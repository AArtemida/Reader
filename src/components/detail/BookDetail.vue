<template>
  <div class="bookdetail">
    <!-- <divider> detail </divider> -->
    <div style="margin-bottom:1.45em;">
      <flexbox>
        <flexbox-item><div class="flex-demo flex_left">
          <h3 v-text="getContent.title"></h3>
          <div>
            <rater v-model="getStar" disabled active-color="#68dff0" :font-size="20"></rater>
            <span class="">{{content.star}}分</span>
          </div>
          <p v-text="content.author"></p>
          <p v-text="getTag"></p>
        </div></flexbox-item>
        <flexbox-item :span="4"><div class="flex-demo"><img class="bookimg" :src="content.img"></div></flexbox-item>
      </flexbox>
    </div>
    <x-button type="primary" style="border-radius:99px;background: #68dff0;">阅读</x-button>
    <group>
      <cell title="收藏" :value="collect"></cell>
      <cell-box>
        <div>笔记<span>{{note}}</span></div>
        <div class="evaluate">评价：<rater v-model="stars" active-color="#ffd777" :font-size="20"></rater></div>
      </cell-box>
    </group>
    <div class="abstract">
      <h3>简介</h3>
      <p v-text="content.abstract"></p>
    </div>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem, Divider, Cell, Rater, Group, XButton, CellBox} from 'vux'

export default{
  name:'detail',
  created () {
    this.$method()
    console.log(this.$route.params.id)
  },
  data(){
	  return {
      id:0,
		  content:this.hotList[0],
      note:0,
      stars:0,
      collect:1
	  }
  },
  computed:{
    getStar:{
      get: function () {
        return this.content.star/2;
        },
      set: function () {}
    },
    getTag:{
      get:function(){
        return this.content.type.join().replace(/,/g,' / ');
      },
      set:function(){}
    },
    getContent:{
      get: function () {
        var id = this.$route.params.id;
        console.log(id);
        if(typeof id != 'undefined'){
          id = parseInt(id);
          this.content = this.hotList[id];
        }
        return this.content;
        },
      set: function () {}
    },
    getDetailId:{
      get: function () {
        var id = this.$route.params.id;
        console.log(id);
        if(typeof id != 'undefined'){
          id = parseInt(id);
          this.content = this.hotList[id];
        }
        return this.content;
        },
      set: function () {}
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    Cell,
    Rater,
    Group,
    XButton,
    CellBox
  }
}
</script>
<style scoped lang="less">
@import '~vux/src/styles/1px.less';

.bookdetail{
  padding:@margin-width @margin-width*2;
  background: #f7f7f7;
  color:#666;
  font-size:14px;

  .flex_left{text-align:left;}
  .abstract h3{
    margin:@margin-width*2 0 @margin-width 0;
  }
  .weui-cell{
    color:#888;
    font-size:14px;
    span{
      color:#68dff0;
      margin-left:0.5em;
    }
  }
  .evaluate{
    position: absolute;
    right: 5px;
  }
}
.flex-demo {
  text-align: center;
  color: #999;
  border-radius: 4px;
  background-clip: padding-box;
  overflow: hidden;
  font-size:14px;

  h3{
    font-size:25px;
    color: #000;
  }
  .bookimg{
    width:96%;
  }
}
</style>
