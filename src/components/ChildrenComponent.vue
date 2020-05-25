<template>
  <div class="children-wrap">
    <input v-model="data" />
    <grandson-component></grandson-component>
  </div>
</template>
<script>
import GrandsonComponent from './GrandsonComponent'
export default {
  name: 'ChildrenComponent',
  components: {
    GrandsonComponent
  },
  data () {
    return {
      data: 'Children Component'
    }
  },
  beforeCreate () {
    console.log('Children beforeCreate')
  },
  created () {
    console.log('Children created')
  },
  beforeMount () {
    console.log('Children beforeMount')
  },
  mounted () {
    console.log('Children mounted')
  },
  beforeUpdate () {
    console.log('Children beforeUpdate')
  },
  updated () {
    console.log('Children updated')
  },
  activated () {
    console.log('Children activated')
  },
  deactivated () {
    console.log('Children deactivated')
  },
  beforeDestroy () {
    console.log('Children beforeDestroy')
  },
  destroyed () {
    console.log('Children destroyed')
  },
  beforeRouteEnter (to, from, next) {
    console.log('Children beforeRouteEnter', to, from)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('Children beforeRouteUpdate', to, from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('Children beforeRouteLeave', to, from)
    next()
  }
}
</script>
<style scoped>
.children-wrap {
  height: 200px;
  width: 400px;
  border: 1px solid #000;
  margin: 20px auto;
}
</style>