import { sum } from './util/math.js'
import _ from 'lodash-es';
import "./css/base.css"
import "./css/style.less"

import { dateFormat } from "../ts/format"

console.log("hello vite");
console.log(sum(20, 30));
console.log(_.join(["abc", "jinxb"]));

console.log(dateFormat("abc"));