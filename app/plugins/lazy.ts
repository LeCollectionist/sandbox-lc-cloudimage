import VueLazyload from "vue-lazyload";

export default defineNuxtPlugin((nuxtApp) => {
  VueLazyload.install(nuxtApp.vueApp, {
    lazyComponent: true,
  });
});
