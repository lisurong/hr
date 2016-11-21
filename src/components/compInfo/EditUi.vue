<template>
  <div class="item margin20">
    <card-title title="基本信息"></card-title> 
      <div class="i-w">       
        <ul class="b-c">
          <li>
            <span>上传logo</span>
          </li>
          <li>
            <span>名称</span>
            <strong style="font-size:22px;font-weight:normal;">中企动力科技股份有限公司</strong><span class="i-tag finished"></span>
          </li>
          <li>
            <span>地址</span>
            <select class="width88 form-control">
              <option>中国</option>
              <option>海外</option>
            </select>
            <select class="width88 form-control">
              <option>北京市</option>
              <option>保定市</option>
            </select>
            <select class="width88 form-control">
              <option>北京市</option>
              <option>保定市</option>
            </select>
            <select class="width88 form-control">
              <option>大兴区</option>
              <option>朝阳区</option>
            </select>
            <input type="text" class="form-control" placeholder="地盛西路数码庄园">
          <li>
            <span>行业</span>
            <select class="form-control">
              <option>计算机服务/软件业</option>
            </select>
            <select class="form-control">
              <option>请选择</option>
            </select>
          </li>
          <li>
            <span>性质</span>
            <select class="form-control">
              <option>上市公司</option>
            </select>
            <select class="form-control">
              <option>1000-9999 人</option>
            </select>
          </li>
          <li>
            <span>官网</span>
            <input type="text" class="form-control" placeholder="www.300.cn">
          </li>
          <li>
            <span>介绍</span>
            <textarea class="form-control textarea" rows="3" style="vertical-align:top; width:410px;height:200px;">中企动力科技股份有限公司为中小企业提供网站建设、全网营销、域名注册和电子邮箱等服务。公司成立16年来，已在全国开设近80家分公司，现有员工6000多人，为30多万家中小企业提供过互联网电子商务服务。
            </textarea>
          </li>
        </ul>
      </div>
      <card-title title="招聘信息"></card-title>
        <div class="i-w">
          <ul class="b-c">
            <li>
              <span>招聘方联系人</span>
              <input type="text" class="width88 form-control" placeholder="王先生">
              <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 先生
              </label>
              <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 女士
              </label>
            </li>
            <li>
              <span>手机号码</span>
              <input type="text" class="form-control" placeholder="18810707896">
            </li>
            <li>
              <span>座机号码</span>
              <input type="text" class="width88 form-control" placeholder="010">
              <input type="text" class="form-control" placeholder="87123345">
              <input type="text" class="width88 form-control" placeholder="1234">
            </li>
            <li>
              <span>电子邮箱</span>
              <input type="text" class="form-control" placeholder="lsrd@126.com">
            </li>
          </ul>
        </div>
        <div class="b-c">
          <div class="i-b">
            <a v-link="{ path: '/comp/123' }" class="button button-3d button-primary button-pill">更改</a>
          </div>
        </div>
    </div>
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
  .form-control{
    display: inline-block;
    width: 190px;
  }  
  .width88{
    width: 88px;
  }
  .b-c{
    width: 700px;
    margin: 0 auto;
    li{
      margin-bottom: 20px;
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
}
</style>
