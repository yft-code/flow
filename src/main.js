import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
console.log('ddddd');
console.log('dddd');
console.log('最后一次提交');
console.log('sss')
console.log('xxxx1111')
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')