<template>
  <div class="item margin20">
    <card-title title="搜索"></card-title>
    <div class="search-f">
      <div class="row">
        <div>
          <div class="input-group">
            <input type="text" class="form-search form-control">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">搜索人才</button>
            </span>
          </div>
        </div>
      </div>
      <div class="s-r">
        <a href="javascript:;" class="button button-3d button-primary button-pill">搜索</a>
      </div>
    </div>
    <div class="s-m jl-s">
      <ul class="s-l">
        <li> 
          <span>职位名称</span>
          <select class="form-control">
            <option>web工程师</option>
            <option>java工程师</option>
          </select>
        </li>
        <li>
          <span>工作经验</span>
          <select class="form-control" style="width:60px;">
            <option>3年</option>
            <option>5年</option>
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
    </div>
  </div>
  <div class="item margin20">
    <card-title title="搜索结果"></card-title>
    <div class="result"><span class="s-num">搜索结果：1200 条</span><a href="javascript:;" class="button button-3d button-primary button-pill">下载</a></div>
    <table class="table table-j">
    <thead>
      <tr>
        <th style="text-align:left;"><input type="checkbox"> 简历名称</th>
        <th>现公司</th>
        <th>经验<span class="caret"></span></th>
        <th>性别</th>
        <th>学历<span class="caret"></span></th>
        <th>年龄<span class="caret"></span></th>
        <th>现住地</th>
        <th>刷新时间<span class="caret"></span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="first"><span><input type="checkbox"> 北京资深Java研发工程师 开发app…</span></td>
        <td><span>北京中企动力科技股份有限公司</span></td>
        <td><span>6年</span></td>
        <td><span>男</span></td>
        <td><span>本科</span></td>
        <td><span>30</span></td>
        <td><span>北京市</span></td>
        <td class="last"><span>2016-09-04</span></td>
      </tr>
      <tr>
        <td class="first"><span><input type="checkbox"> 北京资深Java研发工程师 开发app…</span></td>
        <td><span>北京中企动力科技股份有限公司</span></td>
        <td><span>6年</span></td>
        <td><span>男</span></td>
        <td><span>本科</span></td>
        <td><span>30</span></td>
        <td><span>北京市</span></td>
        <td class="last"><span>2016-09-04</span></td>
      </tr>
      <tr>
        <td class="first"><span><input type="checkbox"> 北京资深Java研发工程师 开发app…</span></td>
        <td><span>北京中企动力科技股份有限公司</span></td>
        <td><span>6年</span></td>
        <td><span>男</span></td>
        <td><span>本科</span></td>
        <td><span>30</span></td>
        <td><span>北京市</span></td>
        <td class="last"><span>2016-09-04</span></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import CardTitle from 'widgets/CardTitle'

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

<style lang="less">
.main{
  .search-f{
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    padding: 30px 0;
    .row{
      float: left;
      width: 78%;
      margin: 0;
      .form-search{
        width: 100%;
        height: 37px;
      }
      .btn-default{
        height: 37px;
        width: 120px;
      }
    }
    .s-r{
      float: left;
      width: 20%;
      margin-left: 2%;
    }
  }
  .s-m{
    width: 80%;
    margin: 0 auto;
    .s-l{
      width: 100%;
    }
  }
  .result{
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    margin: 30px 30px 20px 10px;
    .s-num{
      color: #107BF8;
    }
    .button-3d{
      float: right;
    }
  }
}
</style>
