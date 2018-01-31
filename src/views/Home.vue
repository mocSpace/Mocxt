<template>
  <transition name="moc-fade">
    <div id="Home">
      <Headers></Headers>
      <el-carousel arrow="never" :autoplay="false" :height="innerHeight" trigger="click" @change="change"
                   ref="hCarousel">
        <el-carousel-item v-for="(item, index) in items" :key="index" :name="index.toString()">
          <img :src="item.src" alt="" class="carouse-img zoom">
          <span class="overlay" :class="{'active': item.isOverlay, 'tz': mouseO.ifBool}" @mousedown="mocStart" @mouseup="mocEnd"></span>
          <div class="intro-captions"  :class="{'tz': mouseO.ifBool}" @mousedown="mocStart" @mouseup="mocEnd">
            <h3 class="caption-title big" :class="{'an-active': item.isAnimate}" v-cloak="">{{item.title1}}</h3><br>
            <h3 class="caption-title small" :class="{'an-active': item.isAnimate}" v-cloak="">{{item.title2}}</h3>
            <div class="divider white long" :class="{'an-active': item.isAnimate}"></div>
            <a class="stamp-button intro-button smooth-link animated" :class="{'an-active': item.isAnimate}" href="javascript:;"><span>{{item.btnName}}</span></a>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="swipe-icon"></div>
    </div>
  </transition>
</template>
<script>
  import Headers from '../components/Headers/Headers.vue';
  export default {
    name: "Home",
    data () {
      return {
        htmlShow: false,
        items: [
          {
            src: require("../assets/images/intro-slide01.jpg"),
            isOverlay: false,
            isAnimate: false,
            title1: "抹茶夏天",
            title2: "我们做PC端/移动端/UI设计/品牌设计",
            btnName: "关于我们"
          }, {
            src: require("../assets/images/intro-slide02.jpg"),
            isOverlay: false,
            isAnimate: false,
            title1: "HTML5移动端项目",
            title2: "各种主流框架、前沿科技技术开发",
            btnName: "查看项目"
          }, {
            src: require("../assets/images/intro-slide03.jpg"),
            isOverlay: false,
            isAnimate: false,
            title1: "品牌UI设计",
            title2: "把握各大热点，结合时尚潮流设计",
            btnName: "查看项目"
          }, {
            src: require("../assets/images/intro-slide04.jpg"),
            isOverlay: false,
            isAnimate: false,
            title1: "后台管理系统",
            title2: "各种主流框架、前沿科技技术开发",
            btnName: "查看项目"
          }
        ],
        innerHeight: window.innerHeight + 'px',
        mouseO: {
          ifBool: false,
          x1: 1,
          x2: 1
        }
      }
    },
    mounted(){},
    methods: {
      change: function (index) {
        let vm = this;
        for (let i = 0, len = vm.items.length; i < len; i++){
          vm.items[i].isOverlay = false;
          vm.items[index].isAnimate = false;
        }
        setTimeout(function () {
          vm.items[index].isOverlay = true;
          vm.items[index].isAnimate = true;
        }, 1000);
      },
      mocStart(e) {
        e.stopPropagation();
        this.$set(this.mouseO, 'ifBool', true);
        this.$set(this.mouseO, 'x1', e.clientX);
//        console.log("鼠标按下")
      },
      mocEnd(e){
        let vm = this;
//        console.log("鼠标弹起");
        vm.$set(vm.mouseO, 'ifBool', false);
        vm.$set(vm.mouseO, 'x2', e.clientX);
        let x1 = vm.mouseO.x1, x2 = vm.mouseO.x2;
//        console.log(this.mouseO);
        if (x1 == 1 || x2 == 1) return;
        let x = x2 - x1, curentItem;
        for (let i = 0, le = vm.items.length; i < le; i++) {
          if (vm.items[i].isOverlay) {
            curentItem = i;
            break;
          }
        }
        if (x > 0 && curentItem > 0) {
//          console.log("右划");
          vm.$refs.hCarousel.setActiveItem(curentItem - 1);
        }
        if (x < 0 && curentItem < (vm.items.length - 1)) {
//          console.log("左划");
          vm.$refs.hCarousel.setActiveItem(curentItem + 1);
        }
      }
    },
    components: {
      Headers: Headers
    },
    computed: {},       //计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值
    watch: {},
    filters: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../assets/css/main";

  .carouse-img {
    width: 100%;
    height: 100%;
  }

  .carouse-img.zoom {
    -webkit-animation: sliderzoom linear 40s infinite alternate
  }

  @-webkit-keyframes sliderzoom {
    from {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1)
    }

    to {
      -webkit-transform: scale(1.4);
      -moz-transform: scale(1.4);
      -ms-transform: scale(1.4);
      -o-transform: scale(1.4);
      transform: scale(1.4)
    }
  }

  .el-carousel__indicator.is-active .el-carousel__button {
    width: 14px;
    height: 14px;
    border: 1px solid #fff;
    border-radius: 50%;
    background: transparent;
    margin: 0 5px;
  }

  .el-carousel__indicator .el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    opacity: 1;
    margin: 2px 5px;
  }

  .swipe-icon {
    position: absolute;
    right: 40px;
    bottom: 20px;
    opacity: .2;
    background: transparent url(../assets/images/swipe-icon.png) left top no-repeat;
    width: 44px;
    height: 41px;
    z-index: 200;
    -webkit-transition: all .5s ease-out;
    -moz-transition: all .5s ease-out;
    -ms-transition: all .5s ease-out;
    -o-transition: all .5s ease-out;
    transition: all .5s ease-out;
  }

  .swipe-icon:hover {
    opacity: 1;
  }

  .overlay.tz, .intro-captions.tz {
    cursor: url(../assets/images/grabbing.png) 8 8, move
  }

  .intro-captions {
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 6;
    width: 100%;
    padding: 0 30px;
    text-align: center;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .intro-captions .caption-title {
    color: #fff;
    font-weight: 400;
    margin-bottom: 0;
    padding: 0 8px;
    display: inline-block;
    margin-top: 4px;
  }

  .caption-title.big {
    font-size: 46px;
    font-weight: 500;
  }

  .caption-title.small {
    font-size: 24px;
  }

  .divider {
    margin: 30px auto 30px;
    width: 6px;
    height: 6px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    position: relative;
  }

  .divider.white {
    background-color: #fff;
  }

  .divider.long:before, .divider.long:after {
    width: 200px;
  }

  .divider.white:before, .divider.white:after {
    background-color: #fff;
    opacity: .5;
  }

  .divider:before, .divider:after {
    content: '';
    height: 1px;
    position: absolute;
    top: 45%;
    width: 150px;
  }

  .divider:before {
    right: 13px;
  }

  .divider:after {
    left: 13px;
  }

  .stamp-button {
    border: 1px solid #fff;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 10px 40px;
    display: inline-block;
    position: relative;
    z-index: 2;
    margin-bottom: 30px;
    cursor: pointer;
    outline: 0;
  }

  .stamp-button:after {
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    background: #fff;
    content: '';
    position: absolute;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    transition: all .3s;
    z-index: 0;
    outline: 0;
  }

  .stamp-button span {
    z-index: 2;
    position: relative;
    color: #fff;
  }

  .intro-captions .caption-title, .intro-captions .divider, .intro-captions .intro-button {
    opacity: 0;
    -webkit-transform: translatex(-80px);
    -moz-transform: translatex(-80px);
    transform: translatex(-80px);
  }

  .intro-captions .caption-title.an-active, .intro-captions .divider.an-active, .intro-captions .intro-button.an-active {
    opacity: 1;
    -webkit-transform: translatex(0px);
    -moz-transform: translatex(0px);
    transform: translatex(0px);
  }

  .intro-captions .caption-title.an-active, .intro-captions .divider.an-active, .intro-captions .intro-button.an-active, .swipe-icon {
    -webkit-transition: all .5s ease-out;
    -moz-transition: all .5s ease-out;
    -ms-transition: all .5s ease-out;
    -o-transition: all .5s ease-out;
    transition: all .5s ease-out;
  }

  .intro-captions .caption-title.an-active {
    transition-delay: 2s;
    -webkit-transition-delay: 2s;
    -moz-transition-delay: 2s;
    -ms-transition-delay: 2s;
    -o-transition-delay: 2s;
  }

  .intro-captions .divider.an-active {
    transition-delay: 2.2s;
    -webkit-transition-delay: 2.2s;
    -moz-transition-delay: 2.2s;
    -ms-transition-delay: 2.2s;
    -o-transition-delay: 2.2s;
  }

  .intro-captions .intro-button.an-active {
    transition-delay: 2.4s;
    -webkit-transition-delay: 2.4s;
    -moz-transition-delay: 2.4s;
    -ms-transition-delay: 2.4s;
    -o-transition-delay: 2.4s;
  }
  .stamp-button:hover:after, .stamp-button:active:after {
    height: 100%;
    outline: 0;
  }
  .stamp-button:hover, .stamp-button:hover span {
    color: #111;
    outline: 0;
  }
</style>
