import Vue from 'vue'
import Vuex from 'vuex'
import {userModule} from './modules/user.module'
import {contactModule} from './modules/contact.module'
import {bitcoinModule} from './modules/bitcoin.module'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    userModule,
    contactModule,
    bitcoinModule
  }
})
