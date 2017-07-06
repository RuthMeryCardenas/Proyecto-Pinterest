(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log("cargar app.js");

'use strict';

const url = "https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AZRemi2cy3IqIL1RjoY5QxxyLPmpFM5808fSQ1ZEIux5zaBB9QAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Ccolor%2Cmedia%2Cattribution%2Coriginal_link%2Cmetadata%2Cboard%2Ccounts%2Ccreated_at%2Ccreator";
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

console.log('cargar board');

console.log('cargar header');

console.log('cargar modal');

console.log('cargar lista de pines');

'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Grid(_ => render(root)));
  root.append(wrapper);
}

const state = {
	board: null,
	pins: null,
	current_pin: null
};

const Grid = (update) => {
  const container = $('<div id="grid" class="container"></div>');
  const row = $('<div class="row"></div>');

		for (var i in state.pins) {
			const div = $('<div class="col-xs-6 col-md-3"></div>');
			const img = $('<img src="" class="img-responsive">');
			const url = state.pins[i].image.original.url;
			const id = state.pins[i].id;

			const user = $('<div class="row"></div>');
			const imgUser = $('<div class="col-xs-2"></div>');
			const avatar = $('<img src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_280.jpg" class="img-circle" style="width: 50px">');
			const h1 = $('<div class="col-xs-10"><h1>'+state.pins[i].creator.first_name+'</h1></div>');
			const p = $('<p>'+state.pins[i].board.name+'</p>');
			//const nombre = state.pins[i].creator.first_name;
			//const board = state.pins[i].board.name;
			console.log(state.pins[i].metadata);

			img.attr("src", url);
			div.append(img);
			div.append(user);
			user.append(imgUser);
			imgUser.append(avatar);
			user.append(h1);
			h1.append(p);
			row.append(div);

			div.on("click",(e)=>{
				e.preventDefault();
				state.current_pin = id;
			});
		}

  container.append(row);
  return container;
}

$( _ => {

  getJSON(url, (err, json) => {
    if (err) { return alert(err.message);}
		state.pins = json.data;
		const root = $('.root');
		render(root);
  });
});

},{}]},{},[1])