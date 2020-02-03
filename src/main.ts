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
  faSearchPlus,
  faWindowClose,
  faEye,
  faCode,
}
  from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
  faGithub,
}
  from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VModal from 'vue-js-modal';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(VModal);
Vue.use(Vuelidate);

library.add(faSearch, faChevronRight, faHouseDamage, faInstagram,
  faFacebook, faTwitter, faHome, faWarehouse, faBalanceScale,
  faArrowRight, faBriefcase, faGavel, faCube, faWhatsapp, faAddressCard,
  faCalculator, faBars, faSearchPlus, faWindowClose, faEye, faCode, faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
