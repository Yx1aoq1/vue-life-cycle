<template>
  <div class="parent-wrap">
    <input v-model="data" />
    <children-component></children-component>
  </div>
</template>
<script>
import ChildrenComponent from './ChildrenComponent'
export default {
  name: 'ParentComponent',
  components: {
    ChildrenComponent
  },
  data () {
    return {
      data: 'Parent Component'
    }
  },
  beforeCreate () {
    console.log('Parent beforeCreate')
  },
  created () {
    console.log('Parent created')
  },
  beforeMount () {
    console.log('Parent beforeMount')
  },
  mounted () {
    console.log('Parent mounted')
  },
  beforeUpdate () {
    console.log('Parent beforeUpdate')
  },
  updated () {
    console.log('Parent updated')
  },
  activated () {
    console.log('Parent activated')
  },
  deactivated () {
    console.log('Parent deactivated')
  },
  beforeDestroy () {
    console.log('Parent beforeDestroy')
  },
  destroyed () {
    console.log('Parent destroyed')
  },
  beforeRouteEnter (to, from, next) {
    console.log('Parent beforeRouteEnter', to, from)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('Parent beforeRouteUpdate', to, from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('Parent beforeRouteLeave', to, from)
    next()
  }
}
</script>
<style scoped>
.parent-wrap {
  height: 300px;
  width: 500px;
  border: 1px solid #000;
  margin: 20px auto;
}
</style>
