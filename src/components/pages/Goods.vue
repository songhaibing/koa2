<template>
    <div>
      <img :src="img" style="width: 100%;">
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Goods",
      data(){
          return{
            img:""
          }
      },
      created(){
          let id=this.$route.query.goodsId
        let that=this
        this.$HTTP.post(this.$API.getDetailGoodInfo,{goodsId:id},function (res) {
          that.img=res.data.message.IMAGE1
          console.log(res)
        })
      }
    }
</script>

<style scoped>

</style>
