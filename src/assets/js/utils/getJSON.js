
//GETJSON

const urlGenerate = (component) => {
    const staticUrl = 'https://api.pinterest.com/v1/';
    const token = "/?access_token=AdZr116hPQFc_5cV-0_N3MTDskptFM6A_fkl_oFEIux5zaBB9QAAAAA";
    let boardCreator = "arabelyuska";
    let boardName = "web-ui";
    let data = null;
    let url = null;

    switch (component) {
        case "creator-board":
            data = "&fields=first_name%2Cid%2Clast_name%2Curl%2Cbio%2Ccounts%2Cusername%2Cimage";
            url = "users/" + boardCreator + token + data;
            console.log("generando user");
            break;
        case "board":
            data = "&fields=id%2Cname%2Curl%2Ccounts%2Ccreated_at%2Cprivacy%2Creason%2Ccreator%2Cdescription%2Cimage";
            url = "boards/" + boardCreator + '/' + boardName + token + data;
            console.log("generando url de board");
            break;
        case "pin-list":
            data = "&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Ccolor%2Cmedia%2Cattribution%2Coriginal_link%2Cmetadata%2Cboard%2Ccounts%2Ccreated_at%2Ccreator";
            url =  "boards/" + boardCreator + '/' + boardName + "/pins" + token + data;
            console.log("generando url de lista de pines");
            break;
        case "pin":
            data = "&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Cmetadata%2Cmedia%2Ccounts%2Ccreated_at%2Coriginal_link%2Ccreator%2Cimage";
            url =  "pins/" + state.current_pin + token + data;
            console.log("generando url de pin");
            break;
        default:
    }
    return staticUrl + url;
};

const get = (url, callback) => {
    $.getJSON(url, (data) => {
        //if (data.status !== 200) return callback(new Error("Error al obtener la data"));
        callback(null, data);
    });
};

//END GETJSON
