<template>
  <div class="item margin20">
    <card-title title="人才搜索"></card-title>
    <div class="jl-s">
      <ul class="s-l">
        <li> 
          <span>入库时间</span>
          <select class="form-control">
            <option>2016-09-12</option>
            <option>2016-09-12</option>
          </select>
        </li>
        <li>
          <span>工作经验</span>
          <select class="form-control" style="width:100px;">
            <option>1-3年</option>
            <option>3-5年</option>
          </select>
        </li>
        <li>
          <span>期望工作地</span>
          <select class="width88 form-control">
            <option>大兴区</option>
            <option>朝阳区</option>
          </select>
        </li>
        <li>
          <span>现居住地</span>
          <select class="width88 form-control">
            <option>大兴区</option>
            <option>朝阳区</option>
          </select>
        </li>
      </ul>
      <ul class="s-l">
        <li>
          <span>性别</span>
          <select class="form-control" style="width:60px;">
            <option>男</option>
            <option>女</option>
          </select>
        </li>
        <li>
          <span>年龄</span>
          <input type="text" class="form-control" style="width:46px;" placeholder="20"> 到
          <input type="text" class="form-control" style="width:46px;" placeholder="30">
        </li>
        <li>
          <span>学历</span>
          <select class="width88 form-control">
            <option>本科</option>
            <option>大专</option>
          </select>
        </li>
        <li>
          <span>时间</span>
          <select class="width88 form-control">
            <option>最近一个月</option>
            <option>最近三个月</option>
          </select>
        </li>
        <li>
          <span>关键字</span>
          <input type="text" class="form-control" style="width:160px;" placeholder="请输入关键字">
        </li>
      </ul>
      <div class="s-r">
        <a href="javascript:;" class="button button-3d button-primary button-pill">搜索</a>
      </div>
    </div>
  </div>
  <div class="item margin20">
    <card-title title="搜索结果"></card-title>
    <div class="result"><span class="s-num">搜索结果：12 人</span></div>
    <table class="table">
      <thead>
        <tr>
          <th class="stat">姓名</th>
          <th>职位</th>
          <th>经验</th>
          <th>性别></th>
          <th>年龄</th>
          <th>籍贯</th>
          <th>院校</th>
          <th>学历<span class="caret"></span></th>
          <th>薪资<span class="caret"></span></th>
          <th>来源<span class="caret"></span></th>
          <th>入库时间<span class="caret"></span></th>
          <th class="last">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="stat"><span>鲁大力</span></td>
          <td><span>java工程师</span></td>
          <td><span>3年</span></td>
          <td><span>女</span></td>
          <td><span>27</span></td>
          <td><span>北京</span></td>
          <td><span>北京大学</span></td>
          <td><span>本科</span></td>
          <td><span>10-15k</span></td>
          <td><span>自动投递</span></td>
          <td><span>2016-09-10</span></td>
          <td class="last"><span>随时面试</span></td>
        </tr>
        <tr>
          <td class="stat"><span>鲁大力</span></td>
          <td><span>java工程师</span></td>
          <td><span>3年</span></td>
          <td><span>女</span></td>
          <td><span>27</span></td>
          <td><span>北京</span></td>
          <td><span>北京大学</span></td>
          <td><span>本科</span></td>
          <td><span>10-15k</span></td>
          <td><span>自动投递</span></td>
          <td><span>2016-09-10</span></td>
          <td class="last"><span>随时面试</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CardTitle from '../widgets/CardTitle'

export default {
  data () {
    return {}
  },
  components: {
    CardTitle
  }
}
</script>

<style lang="less">
.main{

}
</style>
