// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import ro from './lang/ro'
import ru from './lang/ru'

Vue.use(VueI18n)
Vue.config.productionTip = false

const messages = {
  en: en,
  ro: ro,
  ru: ru
}

let lang = window.localStorage.getItem('lang') || 'en'
const i18n = new VueI18n({
  locale: lang,
  messages
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>'
})
