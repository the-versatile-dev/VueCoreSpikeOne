import Vue from 'vue'
//import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.component('users-grid', require('./components/UsersGrid.vue').default);

new Vue({
  vuetify
}).$mount('#appVue');

window.Vue = Vue;
