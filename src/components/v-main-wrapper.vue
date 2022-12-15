<template>
   <div class="v-main-wrapper">
      <header class="v-main-wrapper__header">
         <div class="v-main-wrapper__header-content container">
            <div class="v-main-wrapper__header-item">
               <img src="@/assets/icons/home.svg" alt="">
            </div>
            <div class="v-main-wrapper__header-item">
               ПРЕДЗАКАЗ
            </div>
            <router-link :to="{name: 'catalog'}" class="v-main-wrapper__header-item">
               КНИГИ
            </router-link>
            <div class="v-main-wrapper__header-item">
               КОНЦТОВАРЫ
            </div>
            <div class="v-main-wrapper__header-item">
               БОНУСНАЯ ПРОГРАММА
            </div>
            <div class="v-main-wrapper__header-item">
               АКЦИИ
            </div>
            <router-link :to="{name: 'cart'}" class="v-main-wrapper__header-item">
               <img src="@/assets/icons/cart.svg" alt="">
               <div class="v-main-wrapper__cart-quantity">{{CART.length}}</div>
            </router-link>
         </div>
      </header>
      <main class="container">
         <router-view></router-view>
      </main>
      <footer>

      </footer>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
   name: 'v-main-wrapper',
   components: {},   //дети
   props: {},        //данные приходящие от родителя
   data() {          //персональные данные
      return {}
   },
   computed: mapGetters(["CART"]),     //вычисляемые свойства
   methods: {},      //клики, покз окон, скрытие показ элементов
   watch: {},        //слежка за изменением чего либо и действием при этом
   mounted() {}      //отрабатывает после загрузки элемента       
}
</script>

<style lang="scss">
   .v-main-wrapper {
      &__header {
         background: rgb(14, 112, 112);
      }
      &__header-content {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      &__header-item {
         transition: .3s;
         transition-property: background;
         position: relative;
         height: 40px;
         padding: 0 10px;
         line-height: 40px;
         color: #000;
         cursor: pointer;
         & img {
            padding: 3px 10px;
            height: 30px;
         }
         &:hover {
            background: rgb(21, 146, 146);
         }
      }
      &__cart-quantity {
         position: absolute;
         top: 4px;
         right: 15px;
         color: #fff;
         background: rgb(25, 146, 146);
         padding: 10px 5px;
         line-height: 0;
         border-radius: 50%;
         
      }
   }
   .container {
      max-width: 900px;
      margin: 0 auto;
   }
   .router-link-active {
      background: rgb(18, 153, 153);
   }
</style>