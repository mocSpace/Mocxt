<template>
  <div id="Test">
    <rd-swipe :swipe="swipe">
      <div
        class="rd-swipe-item"
        :style="{ 'background-image': `url(${img})` }"
        v-for="(img, index) in imgs">
      </div>
    </rd-swipe>
  </div>
</template>
<script>
  import rdSwipe from '../../node_modules/vue-slide/vue-slide'
  export default {
    name: "Test",
    data () {
      return {
        swipe: {
          activeIndex: 0
        },
        imgs: [
          'http://covteam.u.qiniudn.com/test18.jpg',
          'http://covteam.u.qiniudn.com/test19.jpg',
          'http://covteam.u.qiniudn.com/test20.jpg',
          'http://covteam.u.qiniudn.com/test21.jpg'
        ]
      }
    },
    mounted(){
    },
    methods: {
      vuetouch:function(s,e){
        this.name=s.name;
      }
    },
    components: {
      rdSwipe
    },
    computed: {},       //计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值
    watch: {},
    filters: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../assets/css/main";
</style>
