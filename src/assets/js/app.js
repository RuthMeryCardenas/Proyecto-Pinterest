//ARCHIVO APP

'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    wrapper.append(Board());
    wrapper.append(Grid());

    root.append(wrapper);
};

const state = {
    user: null,
    creator_board: null,
    board: null,
    pins: null,
    current_pin: "AZvD2sZHc13NAEh_yzBNFXT2gG8Ev5dHlBFLxorpuq7RIFTL66qnsJI"
};

$(_ => {

    getJSON(generate_url("board"), (err, json) => {
        if (err) {
            return alert(err.message);
        }
        state.board = json.data;

        getJSON(generate_url('creator-board'), (err, data) => {
            if (err) {
                return alert(err.message);
            }

            state.creator_board = data.data;

            getJSON(generate_url('pin-list'), (err, obj) => {
                if (err) {
                    return alert(err.message);
                }
                state.pins = obj.data;
                const root = $('.root');
                render(root);
            });
        });

    });
});
