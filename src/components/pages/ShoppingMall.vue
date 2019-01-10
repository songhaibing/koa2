<template>
  <div>
    <div class="search-bar">
      <van-row class="test-row">
        <van-col span="3">
          <img :src="locationIcon" class="location-icon"/>
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input"/>
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" width="90%"/>
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <img v-lazy="adBanner" width="100%"/>
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in recommendGoods" :key="index" >
            <div class="recommend-item" @click="clickGoods(item.goodsId)">
              <img :src="item.image" width="80%"/>
              <div>{{item.goodsName}}</div>
              <div>¥{{item.price}}(¥{{item.mallPrice}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <floor-component :floorData="floor1"></floor-component>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import FloorComponent from "../component/floorComponent";

  export default {
    name: "shopping-mall",
    data() {
      return {
        swiperOption: {
          slidesPerView: 3
        },
        //用require引入图片，在不作任何配置的情况下就可以基本解决你的图片路径问题。
        locationIcon: require('../../assets/images/1.png'),
        category: [],
        adBanner: '',
        bannerPicArray: [],
        recommendGoods: [],
        floor1_0: {},
        floor1_1: {},
        floor1_2: {},
        floor1: []
      }
    },
    components: {
      FloorComponent,
      swiper, swiperSlide},
    methods: {
      init() {
        let that = this;
        that.$HTTP.get(this.$API.index, {}, function (res) {
          that.category = res.data.data.category;
          that.adBanner = res.data.data.advertesPicture.PICTURE_ADDRESS;
          that.bannerPicArray = res.data.data.slides;
          that.recommendGoods = res.data.data.recommend;
          that.floor1 = res.data.data.floor1;
          that.floor1_0 = that.floor1[0];
          that.floor1_1 = that.floor1[1];
          that.floor1_2 = that.floor1[2];
          that.floor1_3 = that.floor1[3];
        })
      },
      clickGoods(id){
        this.$router.push({
          path:'/Goods',
          query:{
            goodsId:id
          }
        })
      }
    },
    created() {
      this.init()
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .search-bar {
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
  }

  .search-input {
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
  }

  .location-icon {
    padding-top: .2rem;
    padding-left: .3rem;
    width: 1.7rem;
    height: 1.7rem
  }

  .swiper-area {
    max-height: 15rem;
    clear: both;
    overflow: hidden;
  }

  .type-bar {
    background-color: white;
    padding: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    /*不换行*/
    flex-wrap: nowrap;
  }

  .type-bar div {
    padding: .3rem;
    font-size: 12px;
    text-align: center;
  }

  .recommend-area {
    background-color: #fff;
    margin-top: .3rem;
  }

  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: .2rem;
    color: #e5017d;
  }

  .recommend-body {
    border-bottom: 1px solid #eee;
  }

  .recommend-item {
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }


</style>
