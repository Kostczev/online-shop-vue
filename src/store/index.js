//import Vue from 'vue'
//import Vuex from 'vuex'
import { createStore } from 'vuex'
import product from '@/store/modules/product'
import cart from '@/store/modules/cart/cart'

//Vue.use(Vuex)

const store = createStore({
   modules: {
      product,
      cart
   }
 })

 export default store;