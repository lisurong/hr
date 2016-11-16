<template>
  <h4 class="c-title"><span class="c-icon"></span><span class="c-txt">{{title}}</span></h4>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style lang="less">
  .c-title {
    border-bottom: 1px solid #ddd;
    padding-bottom: 7px;

    .c-icon {
      background: #4A90E2;
      width: 6px;
      height: 20px;
      display: inline-block;
      vertical-align: middle;
    }
    .c-txt {
      font-size: 18px;
      vertical-align: middle;
      margin-left: 5px;
    }
  }

</style>
