<template>
  <div id="LoadingECG" v-if="isLoadingShow">
    <div class="bjs"></div>
    <div id="ecg">
      <img src="../../assets/images/loading.png" style="width: 100%;height: 100%" alt="">
    </div>
    <div class="dhc" :class="{'is-begin width0': isBegin}"></div>
  </div>
</template>
<script>
  export default {
    name: "LoadingECG",
    data () {
      return {
        isLoadingShow: true,
        isBegin: false
      }
    },
//    props: ['loading'],
    mounted(){
        this.isBegin = true;
    },
    methods: {},
    components: {},
    computed: {},       //计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值
    watch: {},
    filters: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../assets/css/main";

  #LoadingECG  {
    .bjs{
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 999;
      background: #222;
    }
    #ecg {
      position: absolute;
      z-index: 1000;
      width: 100%;
      height: 140px;
      top:50%;
      margin-top: -70px;
    }
    .dhc{
      width: 100%;
      height: 200px;
      position: absolute;
      z-index: 1001;
      top:50%;
      margin-top: -100px;
      background: #222;
    }

    .is-begin{
      transition: width 1s;
      -webkit-transition: width 1s;
      -moz-transition: width 1s;
      width: 0;
    }
  }


</style>
