import Vue from 'vue'
//import App from './App.vue'

Vue.config.productionTip = false;

Vue.component('users-grid', require('./components/UsersGrid.vue').default);

//new Vue({
//  render: h => h(App)
//}).$mount('#app');

window.Vue = Vue;
