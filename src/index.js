import './polyfills'
import AirbnbStyleDatepicker from './components/AirbnbStyleDatepicker.vue'
import ClickOutside from './directives/ClickOutside'

const AirbnbStyleDatepickerPlugin = {
  install(Vue, options) {
    Vue.directive('click-outside', ClickOutside)

    Vue.component(
      AirbnbStyleDatepicker.name,
      Object.assign({}, options, AirbnbStyleDatepicker)
    )
  }
}
// User has to install the component by themselves, to allow to pass options
if (typeof window !== 'undefined' && window.Vue) {
  window.AirbnbStyleDatepicker = AirbnbStyleDatepickerPlugin
}
export default AirbnbStyleDatepickerPlugin
