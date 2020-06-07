const {add, mul} = require('./js/mathUtils')

console.log(add(20, 30));
console.log(mul(20, 30));

import {name, age, height} from "./js/info"

console.log(name);
console.log(age);
console.log(height);

require('./css/normal.css') //以commonJS的模块化方式依赖css

require('./css/special.less') //以commonJS的模块化方式依赖less
document.writeln("你好，蔡文静")

//使用vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App'
new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    App
  }
})

