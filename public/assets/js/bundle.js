(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
console.log("cargando... app.js");

const state = {
  user         : null,
  creator_board: "arabelyuska",
  board        : null,
  pins         : null,
  current_pin  : "AZvD2sZHc13NAEh_yzBNFXT2gG8Ev5dHlBFLxorpuq7RIFTL66qnsJI"
};

$( _ => {
  getJSON(generate_url("board","web-ui"), (err, json) => {
    if (err) { return alert(err.message);}
    state.board = json.data;
    console.log(state.board);
  });
  getJSON(generate_url("pin-list","web-ui"), (err, json) => {
    if (err) { return alert(err.message);}
    state.pins = json.data;
    console.log(state.pins);
  });
  getJSON(generate_url("pin",state.current_pin), (err, json) => {
    if (err) { return alert(err.message);}
    state.current_pin = json.data;
    console.log(state.current_pin);
  });
});

console.log('cargar board');

console.log('cargar header');


console.log('cargar lista de pines');

'use strict';
const generate_url = (component, reference) => {
  const token      =  "/?access_token=AdZr116hPQFc_5cV-0_N3MTDskptFM6A_fkl_oFEIux5zaBB9QAAAAA";
  const static_url = "https://api.pinterest.com/v1/";
  let data         = null;
  let url          = null;

  switch (component) {
    case "board":
      data = "&fields=id%2Cname%2Curl%2Ccounts%2Ccreated_at%2Cprivacy%2Creason%2Ccreator%2Cdescription%2Cimage";
      url  = static_url + "boards/" + state.creator_board + "/" + reference + token + data;
      console.log("generando url de board");
      console.log(url);
      break;
    case "pin-list":
      data = "&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Ccolor%2Cmedia%2Cattribution%2Coriginal_link%2Cmetadata%2Cboard%2Ccounts%2Ccreated_at%2Ccreator";
      url  = static_url + "boards/" + state.creator_board + "/" + reference + "/pins" + token + data;
      console.log("generando url de lista de pines");
      break;
    case "pin":
      data = "&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Cmetadata%2Cmedia%2Ccounts%2Ccreated_at%2Coriginal_link%2Ccreator%2Cimage";
      url  = static_url + "pins/" + reference + token + data;
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