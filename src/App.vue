<template>
  <div id="app">
    <div>
      <TouchSpinner :integerOnly="false"  value='10' :max="1000" v-model="test"/>
    </div>
  </div>
</template>

<script>
import TouchSpinner from 'src/VueTouchSpinner.vue';

export default {
    components: {
        TouchSpinner,
    },

    data: function () {
        return {
            test: 10,
        };
    },
};
</script>
