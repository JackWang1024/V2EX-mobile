import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import List from './views/list.vue'

// 挂载路由
Vue.use(Router)
// 初始化路由
var router = new Router()

router.map({
  '/list': {
    component: List
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.start(App, '#app')
