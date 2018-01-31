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
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: function (resolve) {
        require(['../views/Home.vue'], resolve);
      }
    }, {
      path: '/About',
      name: 'About',
      component: function (resolve) {
        require(['../views/About.vue'], resolve);
      }
    },{
      path: '/Test',
      name: 'Test',
      component: function (resolve) {
        require(['../views/Test.vue'], resolve);
      }
    }
  ]
})

// const Foo = resolve => {
//   let loadingInstance = Loading.service({
//     text: "加载中",
//     background: "#333"
//   });
//   require.ensure(['../views/Test.vue'], () => {
//     resolve(require('../views/Test.vue'));
//     loadingInstance.close();
//   })
// };


