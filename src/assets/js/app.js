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


//ARCHIVO APP

'use strict';

const render = (root) => {
    root.empty();

    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append(Header());
		wrapper.append(Grid());

    root.append(wrapper);
};

const state = {
    user: null,
    pins: null,
		current_pin: null,
    board: null
};

$( _ => {

  getJSON(url, (err, json) => {
    if (err) { return alert(err.message);}
		state.pins = json.data;
		const root = $('.root');
		render(root);
  });
});
