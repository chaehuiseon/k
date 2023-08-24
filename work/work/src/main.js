import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const KAKAKO_API_KEY = 'a19b2064ff8db709c3b2c26a5323cd84';
window.Kakao.init(KAKAKO_API_KEY);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
