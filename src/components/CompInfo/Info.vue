<template>
  <div class="item margin20">
    <card-title title="企业信息y"></card-title>
    <div class="i-w">
      <div class="i-c">
        <div class="i-l">
          <img src="/static/images/logo.png" width="180" height="100">
        </div>
        <div class="i-n">
          <strong>{{compInfo.name}}</strong><span class="i-tag unfinished"></span><a class="i-tag ck">查看</a>
        </div>
        <div class="i-j">
          <p><span>{{compInfo.xinzi}}</span><span>{{compInfo.guimo}}</span><span>软件/互联网开发/系统集成</span></p>
          <p>{{compInfo.dizhi}}</p>
          <p>{{compInfo.zhuye}}</p>
        </div>
        <div class="i-s">{{compInfo.jianjie}}</div>
        <div class="i-Id">
          <table class="ri-t">
            <tr>
              <th>招聘联系人：</th><td>加菲猫</td>
            </tr>
            <tr>
              <th>联系方式：</th><td>13800138000<br/>010-87129999-9002</td>
            </tr> 
            <tr>
              <th>电子邮箱：</th><td>lsrdfdfdfd@126.com</td>
            </tr> 
          </table>
        </div>
        <div class="b-c">
          <div class="i-b">
            <a v-link="{ path: '/comp/123/edit' }" class="button button-3d button-primary button-pill">更改</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTitle from '../widgets/CardTitle'

const $ = require('jquery')
export default {
  data () {
    return {
      compInfo: {}
    }
  },
  components: {
    CardTitle
  },
  methods: {
    getCompInfo (compId) {
      let me = this
      $.ajax({
        method: 'GET',
        url: '/static/data/compInfo.json?id=' + compId,
        success: function (resp) {
          me.compInfo = resp
        }
      })
    }
  },
  created () {
    let compId = this.$route.params.compId
    this.getCompInfo(compId)
  }
}
</script>

<style lang="less">
.main{
  .i-w{
    margin: 0 50px; 
    padding-top: 60px;
    .i-l{
      margin-bottom: 40px;
    }
    .i-c{
      width: 580px;
      margin: 0 auto;
    }
    .i-n{
      margin-bottom: 25px;    
      strong{
        font-size: 26px;
        font-weight: normal;
        vertical-align: middle;
      }
      .ck{
        background: url("/static/images/icon02.png") no-repeat 0 0;
        vertical-align: middle;
        color: #107BF8;
        font-size: 18px;
        line-height: 35px;
        cursor: pointer;
      }
    }
    .i-j{
      font-size: 18px;  
      margin-bottom: 15px;
      p{
        margin: 0;
        line-height: 28px;
        span{
          margin-right: 20px;
        }
      }   
    }
    .i-s{
      font-size: 17px;
      line-height: 25px;
      margin-bottom: 25px;
      width: 496px;
    }
    .i-d{
      margin-bottom: 40px;
      .r-t tr th,.r-t tr td{
        font-size: 16px;
        color: #4A4A4A;
        line-height: 28px;
      }
    }
    .i-tag{
      display: inline-block;
      padding-left: 36px;
      height: 35px;
      width: 90px;
      vertical-align: middle;
      margin-left: 14px;
      &.finished{
        background: url("/static/images/qualification/finished.png") no-repeat 0 0;
      }
      &.inprogress{
        background: url("/static/images/qualification/inprogress.png") no-repeat 0 0;
      }
      &.unfinished{
        background: url("/static/images/qualification/unfinished.png") no-repeat 0 0;
      }
    }
  }
  .i-b{
    text-align: right;
    /*a{
      display: inline-block;
      width: 128px;
      height: 37px;
      background: url("/static/images/btn/change/gg-btn.png") no-repeat 0 0;
      &:hover{
        background: url("/static/images/btn/change/gg-btn-h.png") no-repeat 0 0;
      }
    }*/
  }
}
</style>
