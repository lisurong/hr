<template>
  <div class="main">
      <div class="item margin20">
        <card-title title="搜索"></card-title>
        
      </div>
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
.main{}
</style>
