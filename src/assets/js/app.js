'use strict';
console.log("cargando... app.js");

const state = {
  user         : null,
  creator_board: null,
  board        : null,
  pins         : null,
  current_pin  : "AZvD2sZHc13NAEh_yzBNFXT2gG8Ev5dHlBFLxorpuq7RIFTL66qnsJI"
};

$( _ => {
  getJSON(generate_url("creator-board","arabelyuska"), (err, json) => {
    if (err) { return alert(err.message);}
    state.creator_board = json.data;
    console.log(state.creator_board);
  });
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
