import { sum } from './util/math.js'
import _ from 'lodash-es';

// 对css的处理
import "./css/base.css"
import "./css/style.less"

// 对ts的处理
import { dateFormat } from "./ts/format"

// 对图片的处理
import Headimg from './img/头像.jpeg'


// 对vue的处理
import Vue from 'vue'
import VueApp from './vue/App.vue'

console.log("hello vite");
console.log(sum(20, 30));
console.log(_.join(["abc", "jinxb"]));

console.log(dateFormat("abc"));

// img原生
const imgEl = document.createElement('img');
imgEl.src = Headimg;
document.body.appendChild(imgEl);

// vue 的实例
new Vue({
  render: h => h(VueApp)
}).$mount("#app")