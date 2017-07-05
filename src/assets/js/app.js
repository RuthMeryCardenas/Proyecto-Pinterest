
//ARCHIVO APP

'use strict';

const render = (root) => {
    root.empty();

    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append(Header());

    root.append(wrapper);
};



const state = {
    user: null,
    pins: null,
    board: null,
};

$(_ => {

    const root = $('.root');
    render(root);

});

