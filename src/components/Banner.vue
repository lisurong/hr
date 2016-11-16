<template>
  <div class="banner">
    <div class="logo">
        <a href="javascript:;" class="pic"><img src=""></a>
    </div>
    <div class="time">10月15日 星期五 上午9:45</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="less">
  .banner{
    .logo{
      float: left;
      margin-top: 8px;
      .pic{
        display: block;
        width: 150px;
        height: 70px;
      }
    }
    .time{
      float: right;
      line-height: 77px;
      padding-right: 45px;
      font-size: 20px;
      color:#fff;
    }
  }
</style>
