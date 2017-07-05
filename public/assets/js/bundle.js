(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
console.log("cargando... app.js");

const state = {
  board        : null,
  pins         : null,
  current_pin  : "523473156678861702"
};

// const render = (root) => {
//   root.empty();
//   const wrapper = $('<div class="wrapper"></div>');
//
//   wrapper.append(Pin());
//   root.append(wrapper);
// }

$( _ => {

  getJSON(generate_url("pin",state.current_pin), (err, json) => {
    if (err) { return alert(err.message);}
    state.current_pin = json.data;
    console.log(state.current_pin);
    // const root = $('.root');
    // render(root);
  });
});

console.log('cargar board');

console.log('cargar header');

// 'use strict';
//
// console.log('cargar modal');
//
// const Pin = () => {
//   const pin = $("<div class='pin'></div>");
//   const img = $("<img src='https://s-media-cache-ak0.pinimg.com/originals/e3/ce/3a/e3ce3a8fa37fcd1103d751d18f0c68d2.jpg'>");
//
//   pin.append(img);
//
//   return pin;
// }

console.log('cargar lista de pines');

'use strict';
const generate_url = (component, reference) => {
  const token      = "/?access_token=AdZr116hPQFc_5cV-0_N3MTDskptFM6A_fkl_oFEIux5zaBB9QAAAAA";
  const static_url = "https://api.pinterest.com/v1/";
  let data         = null;
  let url          = null;

  switch (component) {
    case "board":
      console.log("generando url de board");
      break;
    case "pin-list":
      console.log("generando url de lista de pines");
      break;
    case "pin":
      data= "&fields=id%2Clink%2Cnote%2Curl%2Ccolor%2Ccounts%2Ccreator%2Cimage%2Cmedia%2Cmetadata%2Coriginal_link";
      url = static_url + "pins/" + reference + token + data;
      console.log("generando url de pin");
      console.log(url);
      break;
    default:
  }
  return url;
}

const getJSON = (url, cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

},{}]},{},[1])