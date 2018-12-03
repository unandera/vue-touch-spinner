<template>
  <div id="app" style="text-align: center; padding: 10vw; max-width: 960px; width: 90vw">
    <div>
      <!-- <NumberInputSpinner /> -->
      <hr>
      <TouchSpinner :integerOnly="false"  value='10' :max="1000" v-model="test"/>
    </div>
  </div>
</template>

<script>
import TouchSpinner from 'components/VueTouchSpinner.vue';

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
