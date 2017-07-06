'use strict';

const state = {
    user: null,
    creator_board: null,
    board: null,
    pins: null,
    current_pin: "AZvD2sZHc13NAEh_yzBNFXT2gG8Ev5dHlBFLxorpuq7RIFTL66qnsJI"
};

    /*getJSON(generate_url("creator-board"), (err, json) => {
        if (err) {
            return alert(err.message);
        }
        state.creator_board = json.data;
        console.log(state.creator_board);
    });
    getJSON(generate_url("board", ""), (err, json) => {
        if (err) {
            return alert(err.message);
        }
        state.board = json.data;
        console.log(state.board);
    });
    getJSON(generate_url("pin-list", ""), (err, json) => {
        if (err) {
            return alert(err.message);
        }
        state.pins = json.data;
        console.log(state.pins);
    });
    getJSON(generate_url("pin", state.current_pin), (err, json) => {
        if (err) {
            return alert(err.message);
        }
        state.current_pin = json.data;
        console.log(state.current_pin);
    });*/
$( _ => {

    get(urlGenerate('creator-board'),(err,data) => {
        //if (err) console.log(err);
        console.log(data);
    });
    get(urlGenerate('pin-list'),(err,data) => {
        console.log(data);
    });

    get(urlGenerate('board'),(err,data) => {
       console.log(data);
    });
    get(urlGenerate('pin'),(err,data) => {
        console.log(data);
    });

});
