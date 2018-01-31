<template>
  <header id="Headers">
    <div class="container">
      <a id="logo" href="javascript:;" class="pull-left" @click="toHref('Home')"><img
        src="../../../static/images/logo.png" alt="Logo"></a>
      <a href="javascript:;" id="menu-trigger" :class="{'close': isClose}" @click="toggleMenu"><span
        class="micon"></span></a>
    </div>
    <transition name="fade">
      <div id="menu-container" ref="menuList" v-show="isClose">
        <div class="container">
          <h3 class="nav-title">目录</h3>
          <div class="divider white"></div>
          <nav id="nav">
            <ul>
              <li><a href="javascript:;" @click="toHref('Home')" class="active">首页</a></li>
              <li><a href="javascript:;" @click="toHref('project')">项目展示</a></li>
              <li><a href="javascript:;" @click="toHref('About')">关于我们</a></li>
              <li><a href="javascript:;" @click="toHref('contact')">联系我们</a></li>
            </ul>
          </nav>
        </div>
        <div class="overlay"></div>
      </div>
    </transition>
  </header>
</template>
<script>
  export default {
    name: "Headers",
    data () {
      return {
        isClose: false
      }
    },
    mounted(){
    },
    methods: {
      toggleMenu: function () {
        let bool = this.isClose;
        this.isClose = !bool;
      },
      toHref: function (path) {
        this.$router.push(path);
      }
    },
    components: {},
    computed: {},       //计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值
    watch: {},
    filters: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../assets/css/main";

  #Headers {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 901;
    overflow: hidden;
    padding: 10px 0;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    #logo {
      display: block;
      position: relative;
      z-index: 9999;
      background: #fff;
      border-radius: 50%;
      cursor: pointer;
      img {
        display: block;
      }
    }
    #logo:hover {
      opacity: .5;
    }
    #menu-trigger {
      display: block;
      width: 30px;
      height: auto;
      background-color: transparent;
      z-index: 9999;
      position: absolute;
      right: 20px;
      top: 10px;

      .micon {
        display: inline-block;
        width: 22px;
        height: 3px;
        position: relative;
        left: 4px;
        top: 3px;
        background: #fff;
        margin: 10px 0;
      }

      .micon, .micon:before, .micon:after {
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        -ms-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
      }

      .micon:before, .micon:after {
        content: '';
        width: 100%;
        height: 3px;
        background: #fff;
        position: absolute;
      }

      .micon:before {
        top: -7px;
      }
      .micon:after {
        top: 7px;
      }
    }
    #menu-trigger:hover span:before {
      top: -8px;
    }
    #menu-trigger:hover span:after {
      top: 8px;
    }
    #menu-trigger.close span {
      background: 0;
    }
    #menu-trigger.close span:before {
      top: 0 !important;
      background-color: #fff;
      -moz-transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    #menu-trigger.close span:after {
      top: 0 !important;
      background-color: #fff;
      -moz-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    #menu-container {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 5;
      width: 100%;
      height: 100%;

      .container {
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 6;
        width: 100%;
        padding: 0;
        text-align: center;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        transform: translateY(-50%);
        z-index: 903;
      }
      .nav-title {
        margin-bottom: 0;
        font-size: 36px;
        text-transform: uppercase;
        color: #fff;
      }
      .divider.white {
        background-color: #fff;
      }
      .divider {
        margin: 30px auto 30px;
        width: 6px;
        height: 6px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        position: relative;
      }
      .divider.white:before, .divider.white:after {
        background-color: #fff;
        opacity: .5;
      }
      .divider:before {
        right: 13px;
      }
      .divider:before, .divider:after {
        content: '';
        height: 1px;
        position: absolute;
        top: 50%;
        width: 150px;
      }
      .divider:after {
        left: 13px;
      }

      #nav ul {
        margin: 0;
        list-style: none;
        text-align: center;
      }
      #nav ul li {
        margin: 0 0 2px 0;
        display: block;
        font-size: 15px;
        text-transform: uppercase;
      }
      #nav ul li a {
        color: #fff;
        display: inline-block;
        padding: 5px 20px;
        border: 1px solid transparent;
      }
      #nav ul li a:hover, #nav ul li a.active {
        border: 1px solid #fff;
      }

      .overlay {
        opacity: .95;
        width: 100%;
        height: 100%;
        z-index: 10;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #000;
      }
    }

  }
</style>
