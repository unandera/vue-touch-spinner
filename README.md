# vue-touch-spinner
A customizable number input spinner component for Vuejs

## Installation

* Install the package via NPM:

* `npm install vue-touch-spinner --save`

* Load it in your project:

```javascript
import NumberInputSpinner from 'vue-touch-spinner'

export default {
  components: {
    NumberInputSpinner,
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
