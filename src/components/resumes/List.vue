<template>
  <div class="item margin20">
    <card-title title="简历搜索"></card-title>
    <div class="jl-s">
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
      <div class="s-r">
        <a href="javascript:;" class="button button-3d button-primary button-pill">搜索</a>
      </div>
    </div>
    
    <!-- <div class="row">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-4">
            <span>职位名称</span>
            <select class="form-control">
              <option>web工程师</option>
              <option>java工程师</option>
            </select>
          </div>
          <div class="col-md-2">
            <span>工作经验</span>
            <select class="form-control" style="width:60px;">
              <option>3年</option>
              <option>5年</option>
            </select>
          </div>
          <div class="col-md-3">
            <span>期望工作地</span>
            <select class="width88 form-control">
              <option>大兴区</option>
              <option>朝阳区</option>
            </select>
          </div>
          <div class="col-md-3">
            <span>现居住地</span>
            <select class="width88 form-control">
              <option>大兴区</option>
              <option>朝阳区</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <span>性别</span>
            <select class="form-control" style="width:60px;">
              <option>男</option>
              <option>女</option>
            </select>
          </div>
          <div class="col-md-3">
            <span>年龄</span>
            <input type="text" class="form-control" style="width:46px;" placeholder="20"> 到
            <input type="text" class="form-control" style="width:46px;" placeholder="30">
          </div>
          <div class="col-md-2">
            <span>学历</span>
            <select class="width88 form-control">
              <option>本科</option>
              <option>大专</option>
            </select>
          </div>
          <div class="col-md-2">
            <span>时间</span>
            <select class="width88 form-control">
              <option>最近一个月</option>
              <option>最近三个月</option>
            </select>
          </div>
          <div class="col-md-3">
            <span>关键字</span>
            <input type="text" class="form-control" style="width:160px;" placeholder="请输入关键字">
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <a href="javascript:;" class="button button-3d button-primary button-pill">搜索</a>
      </div>
    </div> -->
  </div>
  <div class="item margin20">
    <card-title title="简历管理"></card-title>
    <div class="p-w">
      <div class="j-t">
        <!--头部开始-->
        <div class="t-l">
          <a href="###" class="active">待处理 (100)</a>
          <a href="###">待沟通 (60)</a>
          <a href="###">待面试 (60)</a>
          <a href="###">待录用 (90)</a>
          <a href="###">待入职 (90)</a>
        </div>
        <!--头部结束-->                  
      </div>
      <!--列表开始-->
      <div class="j-c">
        <table class="table">
          <thead>
            <tr>
              <th class="stat">姓名</th>
              <th>职位</th>
              <th>经验</th>
              <th>性别</th>
              <th>年龄</th>
              <th>现居地</th>
              <th>院校</th>
              <th>学历<span class="caret"></span></th>
              <th>来源<span class="caret"></span></th>
              <th>操作时间<span class="caret"></span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="stat"><a v-link="{ path: '/resumes/123?act=detail' }">张丽水</a></td>
              <td><span>java工程师</span></td>
              <td><span>3年</span></td>
              <td><span>女</span></td>
              <td><span>27</span></td>
              <td><span>北京</span></td>
              <td><span>北京大学</span></td>
              <td><span>本科</span></td>
              <td><span>自动投递</span></td>
              <td class="last"><span>2016-09-23</span></td>
            </tr>
            <tr>
              <td class="stat"><span>张丽水</span></td>
              <td><span>java工程师</span></td>
              <td><span>3年</span></td>
              <td><span>女</span></td>
              <td><span>27</span></td>
              <td><span>北京</span></td>
              <td><span>北京大学</span></td>
              <td><span>本科</span></td>
              <td><span>自动投递</span></td>
              <td class="last"><span>2016-09-23</span></td>
            </tr>
            <tr>
              <td class="stat"><span>张丽水</span></td>
              <td><span>java工程师</span></td>
              <td><span>3年</span></td>
              <td><span>女</span></td>
              <td><span>27</span></td>
              <td><span>北京</span></td>
              <td><span>北京大学</span></td>
              <td><span>本科</span></td>
              <td><span>自动投递</span></td>
              <td class="last"><span>2016-09-23</span></td>
            </tr>
            <tr>
              <td class="stat"><span>张丽水</span></td>
              <td><span>java工程师</span></td>
              <td><span>3年</span></td>
              <td><span>女</span></td>
              <td><span>27</span></td>
              <td><span>北京</span></td>
              <td><span>北京大学</span></td>
              <td><span>本科</span></td>
              <td><span>自动投递</span></td>
              <td class="last"><span>2016-09-23</span></td>
            </tr>
            <tr>
              <td class="stat"><span>张丽水</span></td>
              <td><span>java工程师</span></td>
              <td><span>3年</span></td>
              <td><span>女</span></td>
              <td><span>27</span></td>
              <td><span>北京</span></td>
              <td><span>北京大学</span></td>
              <td><span>本科</span></td>
              <td><span>自动投递</span></td>
              <td class="last"><span>2016-09-23</span></td>
            </tr>
          </tbody>
        </table>
      </div>
       <!--列表结束-->
    </div>
  </div>
</template>

<script>
import CardTitle from 'widgets/CardTitle'

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
  // .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{
  //   padding: 0;
  // }
  .jl-s{
    overflow: hidden;
    .s-l{
      float: left;
      overflow: hidden;
      margin-top: 10px;
      margin-left: 20px;
      li{
        float: left;
        margin-right: 20px;
      }
    }
    .s-r{
      float: left;
      width: 20%;
    }
  }
  .p-w{
    .t-l{
      width: auto;
    }
  }
}
</style>
