import TouchSpinner from './dist/VueTouchSpinner.vue';

const VueTouchSpinner {
  install(Vue, options) {
    Vue.component(TouchSpinner.name, TouchSpinner)
  }
};

export default VueTouchSpinner;
