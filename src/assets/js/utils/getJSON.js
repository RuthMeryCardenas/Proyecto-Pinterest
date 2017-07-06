//GETJSON


const generate_url = (component) => {
    const staticUrl = 'https://api.pinterest.com/v1/';
    const token = "/?access_token=AUVSR6Z6hsEA0f5dwQ_hUYr5U38pFM7IN1a0bWVEIux5zaBB9QAAAAA";
    let boardCreator = "arabelyuska";
    let boardName = "web-ui";
    let data = null;
    let url = null;

    switch (component) {
        case "creator-board":
            data = "&fields=first_name%2Cid%2Clast_name%2Curl%2Cbio%2Ccounts%2Cusername%2Cimage";
            url = "users/" + boardCreator + token + data;
            break;
        case "board":
            data = "&fields=id%2Cname%2Curl%2Ccounts%2Ccreated_at%2Cprivacy%2Creason%2Ccreator%2Cdescription%2Cimage";
            url = "boards/" + boardCreator + '/' + boardName + token + data;
            break;
        case "pin-list":
            data = "&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Ccolor%2Cmedia%2Cattribution%2Coriginal_link%2Cmetadata%2Cboard%2Ccounts%2Ccreated_at%2Ccreator";
            url = "boards/" + boardCreator + '/' + boardName + "/pins" + token + data;
            break;
        case "pin":
            data = "&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Cmetadata%2Cmedia%2Ccounts%2Ccreated_at%2Coriginal_link%2Ccreator%2Cimage";
            url = "pins/" + state.current_pin + token + data;
            break;
        default:
    }
    return staticUrl + url;
};

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

//END GETJSON
