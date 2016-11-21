<template>
  <div class="menu">
    <a v-link="{ path: '/index' }">首页</a>
    <a v-link="{ path: '/comp/123' }">企业信息</a>
    <a v-link="{ path: '/jobs' }">职位管理</a>
    <a v-link="{ path: '/cv_search' }">简历搜索</a>
    <a v-link="{ path: '/resumes' }">简历库</a>
    <a v-link="{ path: '/interview_record' }">面试记录</a>
    <a v-link="{ path: '/enter_office' }">已入职</a>
    <a v-link="{ path: '/personnel' }">人才库</a>
    <a href="javascript:;">充值业务</a>
    <a v-link="{ path: '/trade_record' }">交易记录</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // selected: 'index',
      // msg: 'Hello World!'
    }
  },
  methods: {
    // selectMenu (e) {
    //   this.selected = e.target.getAttribute('mu')
    // }
  },
  created () {
    // var url = window.location.href
    console.log(this.$route)
  }
}
</script>

<style lang="less">
.menu {
  a{
    display: block;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    &:hover, &.active{
      text-decoration: none;
      background: #2A3A59;
    }
  }
}

</style>
