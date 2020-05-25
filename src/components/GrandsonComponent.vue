<template>
  <div class="grandson-wrap">
    <input v-model="data" />
  </div>
</template>
<script>
export default {
  name: 'GrandsonComponent',
  data () {
    return {
      data: 'Grandson Component'
    }
  },
  beforeCreate () {
    console.log('Grandson beforeCreate')
  },
  created () {
    console.log('Grandson created')
  },
  beforeMount () {
    console.log('Grandson beforeMount')
  },
  mounted () {
    console.log('Grandson mounted')
  },
  beforeUpdate () {
    console.log('Grandson beforeUpdate')
  },
  updated () {
    console.log('Grandson updated')
  },
  activated () {
    console.log('Grandson activated')
  },
  deactivated () {
    console.log('Grandson deactivated')
  },
  beforeDestroy () {
    console.log('Grandson beforeDestroy')
  },
  destroyed () {
    console.log('Grandson destroyed')
  },
  beforeRouteEnter (to, from, next) {
    console.log('Grandson beforeRouteEnter', to, from)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('Grandson beforeRouteUpdate', to, from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('Grandson beforeRouteLeave', to, from)
    next()
  }
}
</script>
<style scoped>
.grandson-wrap {
  height: 100px;
  width: 300px;
  border: 1px solid #000;
  margin: 20px auto;
}
</style>