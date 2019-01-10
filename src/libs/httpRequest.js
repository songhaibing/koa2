'use strict'
import ERROR_CODE from './errorCode'
import axios from 'axios'
import IP from './address'
import qs from 'qs'


let HTTP = {}
// 使用由axios库提供的配置的默认值来创建axios实例
let instance = axios.create()

// 添加请求拦截器
/*let beforeRequest = instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
let beforeResponse = instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})*/

// 移除请求前置拦截器
// axios.interceptors.request.eject(beforeRequest);
// 移除相应前置拦截器
// axios.interceptors.request.eject(beforeResponse);


/**
 * 发送post请求
 *
 * @param url 接口url
 * @param data 传递给后端的数据
 * @param callback 回调函数,参数 res.data.data 为主要数据部分
 */
HTTP.post = function (url, data, callback) {
  let params = qs.stringify(data)
  instance.post(IP + url, params)
    .then(function (res) {
      //响应成功回调
    callback(res)
    })
    .catch(function (err) {
      alert(err);
    });
};

/**
 * 发送get请求
 *
 * @param url 接口url
 * @param data 传递给后端的数据
 * @param callback
 */
HTTP.get = function (url, data, callback) {
  let params = {params: data}
  instance.get(IP + url, params)
    .then(function (res) {
      //响应成功回调
        callback(res)
    })
    .catch(function (err) {
      alert(err);
    });
};

export default HTTP
