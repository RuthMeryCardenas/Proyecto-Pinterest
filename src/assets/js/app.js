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
