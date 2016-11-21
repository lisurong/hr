<template>
  <div class="item margin20">
    <card-title title="面试记录"></card-title>
    <div class="search-f rec-f">
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
    </div>
  </div>
  <div class="item margin20">
    <div class="result"><span class="s-num">今日面试：12 人</span></div>
    <table class="table">
    <thead>
      <tr>
        <th>姓名</th>
        <th>面试职位</th>
        <th>性别</th>
        <th>年龄</th>
        <th>联系电话</th>
        <th>面试时间<span class="caret"></span></th>
        <th>面试地点</th>
        <th>面试联系人</th>
        <th>出席状态</th>
        <th>操作时间<span class="caret"></span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="javascript:;">张利水</a></td>
        <td><span>web安全工程师</span></td>
        <td><span>女</span></td>
        <td><span>27</span></td>
        <td><span>188920209909</span></td>
        <td><span>2016-12-10 10：00</span></td>
        <td><span>数码庄园A座2层..</span></td>
        <td><span>李丽丽</span></td>
        <td>
          <span>
            <div class="switch-box">
              <div class="bg_con">
                <em>缺席</em>
                <input id="checked_1" type="checkbox" class="switch" />
                <label for="checked_1"></label>
                <em class="gray">出席</em>
              </div>
          </div>
          </span>
        </td>
        <td class="last"><span>2016-12-10</span></td>
      </tr>
      <tr>
        <td><a href="javascript:;">张利水</a></td>
        <td><span>web安全工程师</span></td>
        <td><span>女</span></td>
        <td><span>27</span></td>
        <td><span>188920209909</span></td>
        <td><span>2016-12-10 10：00</span></td>
        <td><span>数码庄园A座2层..</span></td>
        <td><span>李丽丽</span></td>
        <td>
          <span>
            <div class="switch-box">
              <div class="bg_con">
                <em>缺席</em>
                <input id="checked_2" type="checkbox" class="switch" />
                <label for="checked_2"></label>
                <em class="gray">出席</em>
              </div>
          </div>
          </span>
        </td>
        <td class="last"><span>2016-12-10</span></td>
      </tr>
      <tr>
        <td><a href="javascript:;">张利水</a></td>
        <td><span>web安全工程师</span></td>
        <td><span>女</span></td>
        <td><span>27</span></td>
        <td><span>188920209909</span></td>
        <td><span>2016-12-10 10：00</span></td>
        <td><span>数码庄园A座2层..</span></td>
        <td><span>李丽丽</span></td>
        <td>
          <span>
            <div class="switch-box">
              <div class="bg_con">
                <em>缺席</em>
                <input id="checked_3" type="checkbox" class="switch" />
                <label for="checked_3"></label>
                <em class="gray">出席</em>
              </div>
          </div>
          </span>
        </td>
        <td class="last"><span>2016-12-10</span></td>
      </tr>
      <tr>
        <td><a href="javascript:;">张利水</a></td>
        <td><span>web安全工程师</span></td>
        <td><span>女</span></td>
        <td><span>27</span></td>
        <td><span>188920209909</span></td>
        <td><span>2016-12-10 10：00</span></td>
        <td><span>数码庄园A座2层..</span></td>
        <td><span>李丽丽</span></td>
        <td>
          <span>
            <div class="switch-box">
              <div class="bg_con">
                <em>缺席</em>
                <input id="checked_4" type="checkbox" class="switch" />
                <label for="checked_4"></label>
                <em class="gray">出席</em>
              </div>
          </div>
          </span>
        </td>
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

<style lang="less">
.main{
  .rec-f{
    .row{
      width: 100%;
    }
  }
  .table-i{
    tr{
      td{
        a{
          margin-right: 0;
        }
      }
    }
  }
  .switch-box{
    margin:0 auto; 
    position: relative;
    top: -3px;
    .gray{
      color: #ddd;
    }
    .switch{
      display:none;
    }
    label{
      position:relative;
      display: inline-block;
      padding: 1px;
      border-radius: 24px;
      height: 31px;
      width: 54px;
      background-color: #eee;
      cursor: pointer;
      -webkit-user-select: none;
      vertical-align: middle;
      &:before{
        content: '';
        display: block;
        border-radius: 24px;
        height: 31px;
        -webkit-transform: scale(1, 1);
        -webkit-transition: all 0.3s ease;
      }
      &:after{
        content: '';
        position: absolute;
        top: 50%;  
        left: 50%;  
        margin-top: -14px;  
        margin-left: -14px;
        width: 28px;
        height: 28px;
        border-radius: 22px;
        background-color: white;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.08);
        -webkit-transform: translateX(-9px);
        -webkit-transition: all 0.3s ease;
      }
    }    
    .switch:checked~label:after{
        -webkit-transform: translateX(9px);
    }    
    .switch:checked~label:before{
        background-color:#44DB5E;
    } 
  } 
}
</style>
