<template>
  <div class="item margin20">
    <card-title title="职位管理"></card-title>
    <div class="j-w">
      <div class="j-t">
        <!--头部开始-->
        <div class="t-l">
          <a
            @click="changeTab('watting_publish')" 
            v-bind:class="{active:selectTab=='watting_publish'}">待发布 (100)</a>
          <a
            @click="changeTab('published')" 
            v-bind:class="{active:selectTab=='published'}">已发布 (60)</a>
          <a
            @click="changeTab('pause')" 
            v-bind:class="{active:selectTab=='pause'}">已暂停 (60)</a>
          <a
            @click="changeTab('off_line')" 
            v-bind:class="{active:selectTab=='off_line'}">已下线 (90)</a>
        </div>
        <!--头部结束-->           
        <div class="t-r">
          <div class="row">
            <div class="col-lg-6">
              <div class="input-group">
                <input type="text" class="form-search form-control">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">快速搜索</button>
                </span>
              </div>
            </div>
          </div>
          <div class="jg">
            <a href="javascript:;" class="button button-3d button-caution button-pill">发布新职位</a>
          </div>
        </div>           
      </div>
      <!--列表开始-->
      <div class="j-c">
        <wat-list v-show="selectTab=='watting_publish'"></wat-list>
        <pub-list v-show="selectTab=='published'"></pub-list>
        <pause-list v-show="selectTab=='pause'"></pause-list>
        <off-list v-show="selectTab=='off_line'"></off-list>
      </div>
       <!--列表结束-->
    </div>
  </div>
</template>

<script>
import CardTitle from '../widgets/CardTitle'
import WatList from './WatList'
import PubList from './PubList'
import PauseList from './PauseList'
import OffList from './OffList'

export default {
  data () {
    return {
      selectTab: 'watting_publish'
    }
  },
  methods: {
    changeTab (tab) {
      this.selectTab = tab
    }
  },
  components: {
    CardTitle,
    WatList,
    PubList,
    PauseList,
    OffList
  }
}
</script>

<style lang="less">
.main{
  .jg{
    float: left;
    .button-3d.button-caution{
      margin-left: 40px;
    }
  }
  .j-t{
    overflow: hidden;
    margin: 20px 0;
    padding-left: 20px;
    .t-l{
      float: left;
      width: 50%;
      a{
        color: #4A4A4A;
        display: inline-block;
        border-bottom: 1px solid #fff;
        height: 45px;
        line-height: 45px;
        margin-right: 40px;
        cursor: pointer;
        &:hover{
          text-decoration: none;
          color: #107BF8;
          border-bottom: 1px solid #107BF8;
        }
        &.active{
          text-decoration: none;
          color: #107BF8;
          border-bottom: 1px solid #107BF8;
        }
      }
    }
    .t-r{
      float: left;
      width: 50%;
      overflow: hidden;
      height: 40px;
      .row{
        margin-top: 4px;
        float: left;
        width: 400px;
      }
      .form-control{
        width: 260px;
      }
      .btn-default{
        width: 130px;
      } 
    }
  }
  .table-j{
    tr td a{
      display: inline-block;
      border: none;
      margin-right: 15px;
    }
  }
}
</style>
