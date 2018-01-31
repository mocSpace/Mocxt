<template>
  <transition name="moc-fade">
    <div id="About">
      <Headers></Headers>
      <div class="main-intro" ref="mainIntro">
        <!--Images-->
        <div class="image about-intro"></div>
      </div>
      <!--<div style="text-align: center;margin: 20px 0">-->
      <!--<h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="5s">测试文字</h1>-->
      <!--</div>-->
    </div>
  </transition>
</template>
<script>
  import Headers from '../components/Headers/Headers.vue';

  export default {
    name: "About",
    data () {
      return {}
    },
    mounted(){
      let vm = this;
      setHeightFull(vm.$refs.mainIntro);
//      let wow = new WOW({
//        boxClass: 'wow',
//        animateClass: 'animated',
//        offset: 0,
//        mobile: true,
//        live: true
//      });
//      wow.init();
      (new WOW()).init();

      setTimeout(function () {
        console.log("2s了")
      }, 2000)
    },
    methods: {},
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

  #About {
    .main-intro {
      position: relative;
      width: 100%;
    }
  }

  #About .image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #222;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .about-intro {
    background-image: url(../assets/images/about.jpg);
  }
</style>
