<template>
  <div class="swiperBox">
    <swiper loop auto :list="imgList" :index="swiper_index" @on-index-change="onIndexChange"></swiper>
    <!-- <p>current index: {{swiper_index}}</p> -->
  </div>
</template>
<script>
import { Swiper } from 'vux'
const baseList = [{
  url: 'javascript:',
  // img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  img:'static/img/list4.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  // img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  img:'static/img/list3.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  // fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  img:'static/img/list6.jpg',
}]
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `${item.title}`
}))
export default {
  data () {
  	return {
  		imgList:urlList,
  		swiper_index: 0,
  	}
  },
  components: {
    Swiper
  },
  methods: {
    onIndexChange (index) {
      this.swiper_index = index
    },
  }
}
</script>
<style scoped lang="less">
.swiperBox{margin:@margin-width;}
</style>
