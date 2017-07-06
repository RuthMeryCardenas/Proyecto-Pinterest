
//ARCHIVO GETJSON

'use strict';

const url = {
    url: "https://api.pinterest.com/v1/",
    user: "arabelyuska/",
    token: "?access_token=ATdIVAQW5I_35SyV8v2xDC4mWg29FM4qDn7rhahEIux5zaBB9QAAAAA&"
};

$.getJSON(url.url + 'boards/' + url.user + "web-ui/" + url.token + 'fields=id%2Cname%2Curl%2Ccreator%2Cimage%2Ccounts', (data) => {
    state.board = data;
    console.log(state.board);
});

$.getJSON(url.url + 'users/' + url.user + url.token + '&fields=image%2Cfirst_name%2Cusername%2Ccounts', (data) => {
    state.user = data;
    console.log(state.user);

});

$.getJSON(url.url + 'boards/' + url.user + 'web-ui/pins/' + url.token + 'fields=id%2Clink%2Cnote%2Curl%2Cmedia', (data) => {
    state.pins = data;
    console.log(state.pins)
});

//END GETJSON
