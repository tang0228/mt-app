import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.less';

Vue.use(ElementUI);

Vue.directive('document-click', {
  bind(el, binding) {
    console.log(el);
    document.addEventListener('click', binding.value, false);
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
