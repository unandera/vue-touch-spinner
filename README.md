# vue-touch-spinner
A customizable number input spinner component for Vuejs

## Demo
[https://unandera.github.io/vue-number-input-spinner/](https://unandera.github.io/vue-touch-spinner/)

## Installation

* Install the package via NPM:

* `npm install vue-touch-spinner`

* Load it in your project:

```javascript
import TouchSpinner from 'vue-touch-spinner'

export default {
  components: {
    TouchSpinner,
  },
}
```

#### Usage example:
```html
<TouchSpinner
  :min="0"
  :max="10"
  :step="2"
  :inputClass="your-css-class"
  :buttonClass="your-other-css-class"
  :integerOnly="true"
  v-model="yourVModel"
/>
```
