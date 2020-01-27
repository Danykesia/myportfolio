import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faChevronRight,
  faHouseDamage,
  faHome,
  faWarehouse,
  faBalanceScale,
  faArrowRight,
  faBriefcase,
  faGavel,
  faCube,
  faAddressCard,
  faCalculator,
  faBars,
}
  from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
}
  from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

library.add(faSearch, faChevronRight, faHouseDamage, faInstagram,
  faFacebook, faTwitter, faHome, faWarehouse, faBalanceScale,
  faArrowRight, faBriefcase, faGavel, faCube, faWhatsapp, faAddressCard, faCalculator, faBars);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
