import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VCurrencyField from 'v-currency-field'
import { VTextField } from 'vuetify/lib'
import * as firebase from 'firebase/app'

Vue.component('v-text-field', VTextField)
Vue.use(VCurrencyField, {
  locale: 'pt-BR',
  decimalLength: 2,
  autoDecimalMode: true,
  min: undefined,
  max: undefined,
  defaultValue: 0
})

var firebaseConfig = {
  apiKey: "AIzaSyAtBVsNoii6umoKm5F8MZ7Zy7EbgSy4aQo",
  authDomain: "financial-objectives.firebaseapp.com",
  databaseURL: "https://financial-objectives.firebaseio.com",
  projectId: "financial-objectives",
  storageBucket: "financial-objectives.appspot.com",
  messagingSenderId: "124047260887",
  appId: "1:124047260887:web:9d6a1936b390bd4fc04492",
  measurementId: "G-GQS7CR4275"
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
