import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ParentComponent from './components/ParentComponent'
import Test from './components/Test'
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/componentA',
      component: ParentComponent
    },
    {
      path: '/componentB',
      component: Test
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
