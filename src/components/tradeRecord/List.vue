<template>
  <div class="item margin20">
    <card-title title="交易明细"></card-title>
    <div class="jl-s jy-j">
      <ul class="s-l">
        <li> 
          <span>交易时间</span>
          <select class="form-control">
            <option>2016-09-12</option>
            <option>2016-09-12</option>
          </select> 至
          <select class="form-control">
            <option>2016-09-12</option>
            <option>2016-09-12</option>
          </select>
        </li>
        <li>
          <span>订单状态</span>
          <select class="form-control" style="width:100px;">
            <option>未支付</option>
            <option>已支付</option>
          </select>
        </li>
      </ul>
      <div class="s-r">
        <a href="javascript:;" class="button button-3d button-primary button-pill">搜索</a>
      </div>
    </div>
  </div>
  <div class="item margin20">
    <div class="result"><span class="s-num">今日面试：12 人</span><em>缺席信息仅保留15天</em></div>
    <table class="table table-j">
      <thead>
        <tr>
          <th>订单号</th>
          <th>订单金额</th>
          <th>交易时间<span class="caret"></span></th>
          <th>订单状态<span class="caret"></span></th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="stat"><span>ZLZPZLB20161023102354040</span></td>
          <td><span>60000000</span></td>
          <td><span>2016-10-26 10:00:00</span></td>
          <td class="stat"><span>已支付</span></td>
          <td class="last">
            <span><a href="###">查看</a></span>
          </td>
        </tr>
        <tr>
          <td class="stat"><span>ZLZPZLB20161023102354040</span></td>
          <td><span>60000000</span></td>
          <td><span>2016-10-26 10:00:00</span></td>
          <td class="stat"><span>已支付</span></td>
          <td class="last">
            <span><a href="###">查看</a></span>
          </td>
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
  .jy-j{
    width: 80%;
    margin: 30px auto;
    .s-r{
      margin-top: 10px;
    }
  }
  .result{
    em{
      color: #FF445B;
      font-size: 12px;
      margin-left: 10px;
    }
  }
}
</style>
