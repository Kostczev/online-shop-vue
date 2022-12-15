import { createRouter, createWebHistory } from 'vue-router';
import vCatalog from '@/components/catalog/v-catalog.vue';
import vCart from '@/components/cart/v-cart.vue';

export default createRouter({
   history: createWebHistory(),
   routes: [
      { 
         path: '/', 
         component: vCatalog, 
         name: 'catalog' 
      },
      { 
         path: '/cart', 
         component: vCart, 
         name: 'cart', 
         //props: true 
      }
   ]
})