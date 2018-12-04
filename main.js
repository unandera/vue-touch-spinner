import TouchSpinner from './dist/VueTouchSpinner.vue';

export default {
  install(Vue, options) {
    Vue.component(TouchSpinner.name, TouchSpinner)
  }
}
