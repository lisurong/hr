<template>
  <edit-ui v-if="act=='edit'"></edit-ui>
  <detail v-if="act=='view'"></detail>
</template>

<script>
import EditUi from './EditUi'
import Detail from './Detail'
export default {
  data () {
    return {
      'act': 'view'
    }
  },
  components: {
    EditUi,
    Detail
  },
  methods: {
  },
  created () {
  },
  route: {
    data: function (transition) {
      this.act = transition.to.query.act || 'view'
    }
  }
}
</script>