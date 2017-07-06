'use strict';
console.log("cargando... app.js");

const state = {
  user         : null,
  creator_board: null,
  board        : null,
  pins         : null,
  // current_pin  : "AZvD2sZHc13NAEh_yzBNFXT2gG8Ev5dHlBFLxorpuq7RIFTL66qnsJI"
  current_pin  : "523473156664821074"
};

$( _ => {
  $(".wrapper").append(myModal());
});
