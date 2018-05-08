# koa2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### ## # 1.组件按需加载

#### ### a.安装npm i babel-plugin-import -D

#### b.在.babelrc里面的plugins配置，代码如下

"plugins": [
  "transform-vue-jsx",
  "transform-runtime",
  
  ["import",{"libraryName":"vant","style":true}]
]

#### c.最后在main.js里面引入

import Vue from 'vue'

import App from './App'

import router from './router'

import {Button} from 'vant'

[Button].map(item => {
  Vue.use(item)
})
