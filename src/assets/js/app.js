'use strict';
console.log("cargando... app.js");

const state = {
  user         : null,
  creator_board: null,
  board        : null,
  pins         : null,
  current_pin  : "523473156678861702"
};

$( _ => {
  $(".wrapper").append(myModal());
  // getJSON(generate_url("pin",state.current_pin), (err, json) => {
  //   if (err) { return alert(err.message);}
  //   state.current_pin = json.data;
  //   console.log(state.current_pin);
  // });
});
