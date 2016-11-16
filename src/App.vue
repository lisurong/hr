<template>
  <div class="body-warp">
    <banner></banner>
    <div class="content">
      <nav-menu></nav-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import NavMenu from './components/NavMenu'

export default {
  replace: false,
  components: {
    Banner,
    NavMenu
  }
}
</script>

<style lang="less">

.body-warp{
  width: 100%;
  height: 100%;
  /*font-family: "PingFangSC-Regular";*/
  font-size: 16px;
  color: #4A4A4A;
  .banner{
    width: 100%;
    height: 100px;
    background: #475775;
    height: 77px;
  }
  .content{
    position: absolute;
    top: 77px;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 660px;
    overflow: hidden;
    .menu{
      background: #475775;
      width: 150px;
      position: absolute;
      left:0;
      top: 0;
      bottom: 0;
      min-height: 660px;
    }
  }
  .fb{
    .fb-btn{
      display: block;
      width: 128px;
      height: 37px;
      margin: 0 auto;
      background: url("/static/images/btn/release/fb-btn.png") no-repeat 0 0;
      cursor: pointer;
      &:hover{
        background: url("/static/images/btn/release/fb-btn-h.png") no-repeat 0 0;
      }
    }
  }
}

</style>
