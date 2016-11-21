<template>
  <div class="item margin20">
    <card-title title="员工搜索"></card-title>
    <div class="search-f">
      <div class="row">
        <div>
          <div class="input-group">
            <input type="text" class="form-search form-control">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">员工搜索</button>
            </span>
          </div>
        </div>
      </div>
      <div class="s-r">
        <a href="javascript:;" class="button button-3d button-primary button-pill">高级搜索</a>
      </div>
    </div>
    <div class="s-m jl-s">
      <ul class="s-l">
        <li> 
          <span>职位名称</span>
          <select class="form-control">
            <option>高层-管理层</option>
            <option>产品经理</option>
          </select>
        </li>
        <li>
          <span>在职时间</span>
          <select class="form-control" style="width:100px;">
            <option>1-3年</option>
            <option>3-5年</option>
          </select>
        </li>
        <li>
          <span>所属分公司</span>
          <select class="width88 form-control">
            <option>大兴区</option>
            <option>朝阳区</option>
          </select>
        </li>
        <li>
          <span>最高学历</span>
          <select class="width88 form-control">
            <option>博士</option>
            <option>本科</option>
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
          <span>户籍</span>
          <select class="width88 form-control">
            <option>北京</option>
            <option>河北</option>
          </select>
        </li>
        <li>
          <span>关键字</span>
          <input type="text" class="form-control" style="width:300px;" placeholder="姓名/职位...">
        </li>
      </ul>
    </div>
  </div>
  <div class="item margin20">
    <card-title title="搜索结果"></card-title>
    <div class="result"><span class="s-num">在职员工：12 人</span></div>
    <table class="table">
    <thead>
      <tr>
        <th style="text-align:left">职位名称<span class="caret"></span></th>
        <th>职位</th>
        <th>性别<span class="caret"></span></th>
        <th>年龄<span class="caret"></span></th>
        <th>学历<span class="caret"></span></th>
        <th>户籍</th>
        <th>所在分公司</th>
        <th>入职时间<span class="caret"></span></th>
        <th>在职时间<span class="caret"></span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="first"><span>Web前端安全工程师</span></td>
        <td><span>夯大力</span></td>
        <td><span>女</span></td>
        <td><span>27</span></td>
        <td><span>本科</span></td>
        <td><span>北京</span></td>
        <td><span>北京-亦庄分公司</span></td>
        <td><span>2016-12-10</span></td>
        <td class="last"><span>2016-12-10</span></td>
      </tr>
      <tr>
        <td class="first"><span>Web前端安全工程师</span></td>
        <td><span>夯大力</span></td>
        <td><span>女</span></td>
        <td><span>27</span></td>
        <td><span>本科</span></td>
        <td><span>北京</span></td>
        <td><span>北京-亦庄分公司</span></td>
        <td><span>2016-12-10</span></td>
        <td class="last"><span>2016-12-10</span></td>
      </tr>
      <tr>
        <td class="first"><span>Web前端安全工程师</span></td>
        <td><span>夯大力</span></td>
        <td><span>女</span></td>
        <td><span>27</span></td>
        <td><span>本科</span></td>
        <td><span>北京</span></td>
        <td><span>北京-亦庄分公司</span></td>
        <td><span>2016-12-10</span></td>
        <td class="last"><span>2016-12-10</span></td>
      </tr>
      <tr>
        <td class="first"><span>Web前端安全工程师</span></td>
        <td><span>夯大力</span></td>
        <td><span>女</span></td>
        <td><span>27</span></td>
        <td><span>本科</span></td>
        <td><span>北京</span></td>
        <td><span>北京-亦庄分公司</span></td>
        <td><span>2016-12-10</span></td>
        <td class="last"><span>2016-12-10</span></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import CardTitle from '../widgets/CardTitle'

export default {
  data () {
    return {
      compInfo: {}
    }
  },
  components: {
    CardTitle
  }
}
</script>


