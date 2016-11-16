<template>
  <div class="main">
      <div class="item margin20">
        <card-title title="职位需求 "></card-title>
        <div class="i-w">
          <div class="r-c">
            <!--头像区开始-->
            <div class="r-r-t">
              <img data-src="holder.js/140x140" class="img-circle" alt="130x130" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA0Njg3NSIgeT0iNzAiIHN0eWxlPSJmaWxsOiNBQUFBQUE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6MTBwdDtkb21pbmFudC1iYXNlbGluZTpjZW50cmFsIj4xNDB4MTQwPC90ZXh0PjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 130px; height: 130px;">
              <div class="r-cz"></div>
              <div class="r-list"></div>
            </div>
            <!--头像区结束-->
            <!--名称区开始-->
            <div class="r-r-n">
              <h1>Web应用安全工程师</h1>
              <p>中企动力科技股份有限公司</p>
            </div>
            <!--名称区结束-->
            <!--职位信息开始-->
            <div class="r-r-i">
              <div class="bt"><em></em><span>职位信息</span><em></em></div>
              <div class="i-wrap"><span>工作地点：北京-大兴区</span><span>招聘人数：1人</span><span>发布日期：2016-01-12</span></div>
              <div class="i-wrap"><span>月薪：10001-15000元/月</span><span>工作经验：5年</span><span>最低学历：不限</span><span>工作性质：全职</span></div>
            </div>
            <!--职位信息结束-->
            <!--职位描述开始-->
            <ul class="i-i-m">
              <li><div class="bt"><em></em><span>职位描述</span><em></em></div></li>
              <li>职位类别:Web应用安全工程师/IT互联网安全/信息安全</li>
              <li>
                <span class="ms-t">工作职责:</span>
                <div class="ms-p">
                  <p class="p-first">1、统招本科及以上学历，交互设计、信息设计、工业设计、平面设计（界面类）;</p>
                  <p>2、具有3年以上交互设计工作经验；善于团队合作，具备良好的沟通协调能力。</p>
                <div>
              </li>
              <li>有意者请发送简历至:WISMAqua@Gmail.com</li>
              <li>工作地址:北京亦庄荣京东街朝林广场A座</li>
            </ul>
            <!--职位描述结束-->
            <!--公司介绍开始-->
            <div class="i-i-g">
              <div class="bt"><em></em><span>公司介绍</span><em></em></div>
              <p>北京灵隆科技有限公司是由科大讯飞集团与京东集团共同出资成立的一家高科技公司。
公司旨在充分发挥科大讯飞出色的语音技术及人工智能技术优势和京东在智能产业链方面的优势，致力于智能家居硬件产品、语音解决方案及智能硬件平台服务的研发和推广，并打造可连接智能应用链的热点产品，让语音智能生活体验进入千家万户</p>
            </div>
            <!--公司介绍结束-->
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import CardTitle from './widgets/CardTitle'

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
  .r-c{
    width: 640px;
    margin: 0 auto;
    .bt{
      overflow: hidden;
      margin-bottom:10px;
      em{
        display: inline-block;
        width: 281px;
      }
      span{
        color:#107BF8;
        font-size:14px;
      }
    }
    .r-r-t{
      text-align: center;
      position: relative;
      margin-bottom: 20px;
      .r-pic{
        width: 130px;
        height: 130px;
        background: #ccc;
        border-radius: 50%;
        margin: 0 auto;
      }
      .r-cz{
        position: absolute;
        width: 30px;
        height: 30px;
        background: #000;
        top:50%;
        margin-top: -15px;
        right: 190px;
      }
    }
    .r-r-n{
      text-align: center;
      h1{
        font-size: 24px;
        margin: 0;
        line-height: 32px;
      }
      p{
        font-size: 16px;
      }
    }
    .r-r-i{
      margin-bottom: 10px;
      .i-wrap{
        width:100%;
        display:-moz-box;
        display:-webkit-box;
        display:box;
        line-height: 28px;
        span{
          -moz-box-flex:1;
          -webkit-box-flex:1;
          box-flex:1;
          display: block;
        }
      }
    }
    .i-i-m{
      li{
        line-height: 28px;
      }
      .ms-t{
        width: 74px;
        display: block;
        float: left;
      }
      .ms-p{
        margin-left: 74px;
        p{
          margin-top: -10px;
          &.p-first{
            margin-top: 0;
          }
        }
      }
    }
  }
}
</style>
