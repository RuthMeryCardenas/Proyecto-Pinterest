'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    wrapper.append(Board());

    root.append(wrapper);
};

const state = {
    user: null,
    creator_board: null,
    board: null,
    pins: null,
    current_pin: "AZvD2sZHc13NAEh_yzBNFXT2gG8Ev5dHlBFLxorpuq7RIFTL66qnsJI"
};

$( _ => {

    get(urlGenerate('pin-list'),(err,data) => {
        console.log(data);
    });

    get(urlGenerate('pin'),(err,data) => {
        console.log(data);
    });

    const root = $('.root');

    render(root);

});
