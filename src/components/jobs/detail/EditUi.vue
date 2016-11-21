<template>
  <div class="">
      <div class="item margin20">
        <card-title title="基本信息"></card-title> 
          <div class="i-w">       
            <ul class="b-c">
              <li>
                <span>职位类别</span>
                <select class="form-control">
                  <option>首席设计师</option>
                  <option>java高级工程师</option>
                  <option>前端工程师</option>
                  <option>产品经理</option>
                  <option>交互设计师</option>
                </select>
              </li>
              <li>
                <span>职位名称</span>
                <input type="text" class="form-control" placeholder="UI & Web 设计师">
              </li>
              <li>
                <span>工作地点</span>
                <select class="width88 form-control">
                  <option>北京市</option>
                  <option>保定市</option>
                </select>
                <input type="text" class="form-control" placeholder="地盛西路数码庄园">
              </li>
              <li>
                <span>工作性质</span>
                <span class="tag">
                  <em>全职</em><em>兼职</em><em>实习</em><em>校园</em>
                </span>
              </li>
              <li>
                <span>有效时间</span>
                <span class="tag">
                  <em class="active">30天</em><em>60天</em><em>90天</em><em>180天</em>
                </span>
              </li>
              <li>
                <span>月薪范围</span>
                <select class="form-control">
                  <option>5000以下</option>
                  <option>5001-10000</option>
                  <option>10001-15000</option>
                  <option>15001-20000</option>
                  <option>20000以上</option>
                </select>
                 或 最低<input type="text" class="width88 form-control" placeholder="10000"> 到 最高<input type="text" class="width88 form-control" placeholder="20000">
              </li>
              <li>
                <span>需求人数</span>
                <input type="text" class="width88 form-control" placeholder="200">
              </li>
              <li>
                <span>工作经验</span>
                <select class="form-control">
                  <option>应届毕业生</option>
                  <option>2年工作</option>
                </select>
              </li>
              <li>
                <span>学历要求</span>
                <select class="form-control">
                  <option>大专</option>
                  <option>本科</option>
                </select>
              </li>
              <li>
                <span>福利待遇</span>
                <span class="tag">
                  <em class="active">五险一金</em><em>交通补助</em><em>午餐补助</em><em>租房补助</em>
                </span>
              </li>
              <li>
                <span>任职要求</span>
                <textarea class="form-control textarea" rows="3" style="vertical-align:top; width:410px;height:200px;"></textarea>
              </li>
            </ul>
          </div>
          <card-title title="职位曝光"></card-title>
            <div class="i-w">
              <ul class="b-c">
                <li>
                  <input type="checkbox">
                  <span>职位置顶</span>
                  <select class="width88 form-control">
                    <option>180天</option>
                    <option>400天</option>
                  </select>
                  <em class="xy"> 20 智联币</em>
                </li>
                <li>
                  <input type="checkbox">
                  <span>智能刷新</span>
                  <select class="width88 form-control">
                    <option>20:00</option>
                    <option>10:00</option>
                  </select>
                  <span>刷新间隔</span>
                  <select class="width88 form-control">
                    <option>12小时</option>
                    <option>20小时</option>
                  </select>
                  <span>刷新次数</span>
                  <input type="text" class="width88 form-control" placeholder="200">
                  <em class="xy"> 20 智联币</em>
                </li>
              </ul>
            </div>
            <div class="b-zlb">共计：<span>60</span> 智联币（发布职位 <span>20</span> + 职位置顶 <span>20</span> + 智能刷新 <span>20</span>）</div>
            <div class="fb">
              <a v-link="{ path: '/jobs/123' }" class="button button-3d button-primary button-pill">预览</a>
              <a href="javascript:;" class="button button-3d button-highlight button-pill">暂存</a>
              <a href="javascript:;" class="button button-3d button-caution button-pill">发布</a>
            </div>
        </div>
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
  .b-c{
    width: 700px;
    margin: 0 auto;
    li{
      margin-bottom: 20px;
    }
    .form-control{
      display: inline-block;
      width: 190px;
    }
    .width88{
      width: 88px;
    }
    .xy{
      margin-left: 10px;
      font-size: 14px;
      color: #ccc;
    }
    .tag{
      em{
        display: inline-block;
        height: 25px;
        line-height: 25px;
        padding: 0 15px;
        border:1px solid #ddd;
        border-radius: 2px;
        margin-right: 20px;
        cursor: pointer;
        &:hover,&.active{
          background: #3390FC;
          border:1px solid #3390FC;
          color: #fff;
        }
      }
    }
  }
  .b-zlb{
    width: 700px;
    text-align: right;
    color: #FF445B;
    margin: 20px auto;
  }
  .fb{
    width: 700px;
    text-align: right;
    margin: 60px auto;
  }
}
</style>
