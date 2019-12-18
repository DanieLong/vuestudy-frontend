import Spin from '@/components/Spin';
import Vue from 'vue';

let body = document.getElementsByTagName('body')[0];

export function show() {
  let target = document.createElement('div');
  body.appendChild(target);

  new Vue({
    render: h => h(Spin)
  }).$mount(target);
}

export function hide() {
  let layer = document.getElementById('__layer__');
  body.removeChild(layer);
}
