<template>
  <table class="table table-j">
    <thead>
      <tr>
        <th>职位名称2</th>
        <th class="stat">状态</th>
        <th>工作地点</th>
        <th>招聘数</th>
        <th>简历数</th>
        <th>面试数</th>
        <th>发布时间<span class="caret"></span></th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span>Java工程师</span></td>
        <td class="stat"><span>已发布</span></td>
        <td><span>北京-亦庄经济技术开发区</span></td>
        <td><span>30</span></td>
        <td><span>30</span></td>
        <td><span>30</span></td>
        <td><span>2016-10-15  10:59</span></td>
        <td class="last">
          <span><a v-link="{ path: '/jobs/123?act=edit' }">编辑</a><a v-link="{ path: '/jobs/123' }">预览</a><a href="javascript:;">下载</a><a href="javascript:;">暂停</a></span>
        </td>
      </tr>
      <tr>
        <td><span>Java工程师</span></td>
        <td class="stat"><span>已发布</span></td>
        <td><span>北京-亦庄经济技术开发区</span></td>
        <td><span>30</span></td>
        <td><span>30</span></td>
        <td><span>30</span></td>
        <td><span>2016-10-15  10:59</span></td>
        <td class="last">
          <span><a v-link="{ path: '/jobs/123?act=edit' }">编辑</a><a v-link="{ path: '/jobs/123' }">预览</a><a href="javascript:;">下载</a><a href="javascript:;">暂停</a></span>
        </td>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {
  }
}
</script>

<style lang="less">

</style>
