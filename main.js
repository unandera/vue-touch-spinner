import TouchSpinner from './src/VueTouchSpinner.vue';

export default {
  install(Vue, options) {
    Vue.component(TouchSpinner.name, TouchSpinner)
  }
}
