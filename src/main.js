// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入
require('vue2-animate/dist/vue2-animate.min.css');


// 简单配置
NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

Vue.config.productionTip = false;
Vue.use(ElementUI);


let mocProgress = document.getElementById("mocProgress");
router.beforeEach((to,from,next) => {
  // 插件进度条开启
  NProgress.start();
  next()
});

router.afterEach(() => {
  NProgress.done();
  setTimeout(function () {
    fadeOut(mocProgress, 0, 100);
  }, 300);

  // .style.display = "none";
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
