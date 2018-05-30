<template>
  <div class="list_box">
    <div class="list_flex_box">
      <flexbox>
        <flexbox-item><div class="flex-demo flex_left" :style="{backgroundImage:`url(${imgList[0].src})`}">
          <span class="fleximg_title" v-text="imgList[0].title"></span>
        </div></flexbox-item>
        <flexbox-item :span="5"><div class="flex-demo">
          <div class="flex_right" :style="{backgroundImage:`url(${imgList[1].src})`}"><span class="fleximg_title" v-text="imgList[1].title"></span></div>
          <div class="flex_right" :style="{backgroundImage:`url(${imgList[2].src})`}"><span class="fleximg_title" v-text="imgList[2].title"></span></div>
        </div></flexbox-item>
      </flexbox>
    </div>

    <button-tab>
      <button-tab-item><span class="vux-reddot-s">今天</span></button-tab-item>
      <button-tab-item selected>本周</button-tab-item>
      <button-tab-item>本月</button-tab-item>
    </button-tab>
  
    <panel :list="getList" type="5" @on-img-error="onImgError"></panel>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem,Panel, ButtonTab, ButtonTabItem} from 'vux'
export default {
  name:'list',
  components: {
    Panel,
    ButtonTabItem,
    ButtonTab,
    Flexbox,
    FlexboxItem
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    },
  },
  computed:{
    getList:{
      get: function () {
        var _this = this;
        this.hotList.forEach(function(item){
          var obj = {
            src:_this.$check(item.img),title:_this.$check(item.title),
            desc:_this.$check(item.author),url:'/detail/'+item.id+'',fallbackSrc:''
          };
          _this.list.push(obj);
        })
        return this.list;
        },
      set: function () {}
    }
  },
  data () {
    return {
      list: [],
      imgList:[{
        src:'/static/list2.jpg',
        title:'阅读1',
        link:''
      },
      {
        src:'/static/list1.jpg',
        title:'阅读2',
        link:''
      },{
        src:'/static/list5.jpg',
        title:'阅读3',
        link:''
      }],
    }
  }
}
</script>
<style scoped lang="less">
.list_box{
  padding: @margin-width;

  .list_flex_box{
    margin-bottom: 2*@margin-width;
  }
  .flexitem_mixin{
    background-color: #20b907;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    background-clip: padding-box;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position:relative;
  }
  .flex_after{
    content:'';
    display: block;
    background: rgba(0,0,0,.4);
    width:100%;
    height:100%;
  }
  .flex_left{
    .flexitem_mixin;
    height: 8.65em;

    &:after{
      .flex_after;
    }
    &:hover{
      
    }
  }
  .flex_right{
    .flexitem_mixin;
    height:4.12em;

    &:after{
      .flex_after;
    }
  }
  .fleximg_title{
    position: absolute;
    top:36%;
  }
  .flex_right:first-child{
    margin-bottom:@margin-width/2;
  }
}
</style>