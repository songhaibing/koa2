<template>
  <div>
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <div class="register-panel">
      <van-field
        v-model="username"
        label="用户名"
        icon="clear"
        placeholder="请输入用户名"
        required
        @click-icon="username = ''"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <div class="register-button">
        <van-button type="primary" size="large" @click="axiosLogin">登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import {Toast} from 'vant'
  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      axiosLogin(){
       this.$HTTP.post(this.$API.login,{userName:this.username,password: this.password},function (res) {
         console.log(res)
         if(res.data.code===200){
          Toast.success(res.data.message)
         }else{
           Toast.fail('注册失败');
         }
       })
      }
    },
  }
</script>
<style scoped>
  .register-panel{
    width:96%;
    border-radius: 5px;
    margin:20px auto;
    padding-bottom:50px;
  }
  .register-button{
    padding-top:10px;
  }
</style>
