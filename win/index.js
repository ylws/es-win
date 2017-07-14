import {CFCMWin} from './src/Plugins_es6_win.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$Win', { value: CFCMWin });
  }
}