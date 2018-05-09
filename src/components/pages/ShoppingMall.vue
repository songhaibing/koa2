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
           <img v-lazy="banner.imageUrl" width="100%"/>
         </van-swipe-item>
       </van-swipe>
     </div>
   </div>
</template>

<script>
    export default {
        name: "shopping-mall",
      data(){
          return{
            //用require引入图片，在不作任何配置的情况下就可以基本解决你的图片路径问题。
            locationIcon:require('../../assets/images/1.png'),
            bannerPicArray:[
              {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
              {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
              {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
            ]
          }
      },
      methods:{
          init(){
            let that = this;
            that.$HTTP.get(this.$API.index,{},function(res){

            })
          }
      },
      created(){
        this.init()
      },
      mounted(){

      }
    }
</script>

<style scoped>
      .search-bar{
        height:2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
      }
  .search-input{
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0px;
    border-right:0px ;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
  }
  .location-icon{
    padding-top: .2rem;
    padding-left: .3rem;
    width: 1.7rem;
    height: 1.7rem
  }
      .swiper-area{
        max-height:15rem;
        clear:both;
        overflow: hidden;
      }

</style>
