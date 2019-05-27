import Vue from 'vue'
import App from './App.vue'
// import Forms from './Forms.vue'

Vue.config.productionTip = false
// Vue.component('app-forms', Forms)
new Vue({
  render: h => h(App),
}).$mount('#app')
