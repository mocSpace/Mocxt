import Vue from 'vue'
import Router from 'vue-router'
import {Loading} from 'element-ui';

Vue.use(Router);

export default new Router({
  hashbang: true,
  history: true,
  transitionOnLoad: true,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: function(resolve){
        require(['../views/Test.vue'], resolve);
      }
    },
    {
      path: '/LoadingECG',
      name: 'LoadingECG',
      component: function(resolve){
        require(['../components/LoadingECG/LoadingECG.vue'], resolve);
      }
    }
  ]
})

const Foo = resolve => {
  let loadingInstance = Loading.service({
    text: "加载中",
    background: "#333"
  });
  require.ensure(['../views/Test.vue'], () => {
    resolve(require('../views/Test.vue'));
    loadingInstance.close();
  })
};


