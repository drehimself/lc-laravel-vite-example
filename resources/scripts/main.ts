import { add } from './math';
import { chunk } from 'lodash';
import axios from 'axios';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import ExampleComponent from './components/ExampleComponent.vue';
import ExampleReact from './components/ExampleReact';
import React from 'react';
import ReactDOM from 'react-dom/client';

function greeting(name: string): void {
  alert(`Hello ${name}`);
}

// greeting('Andre');
// alert(add(3, 2));

console.log(chunk(['a', 'b', 'c', 'd'], 2));

axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error.response);
  });

// Vue Init
createApp({
  components: {
    ExampleComponent,
  },
}).mount('#app');

const props = Object.assign(
  {},
  document.getElementById('example-react').dataset
);
// React stuff
ReactDOM.createRoot(document.getElementById('example-react')).render(
  React.createElement(ExampleReact, props)
);
