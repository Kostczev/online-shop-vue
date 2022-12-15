//export const css = {
//   //requireModuleExtension: false,
//   loaderOptions: {
//      sass: {
//         prependData: `@import "~@/assets/styles/styles.scss";`
//      }
//   }
//};
module.exports = {
   css: {
      //requireModuleExtension: false,
      loaderOptions: {
         sass: {
            prependData: '@import "@/assets/styles/styles.scss";'
         }
      }
   }
}