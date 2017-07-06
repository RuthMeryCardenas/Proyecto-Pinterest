'use strict';
const generate_url = (component, reference) => {
  const token      =  "/?access_token=AUVSR6Z6hsEA0f5dwQ_hUYr5U38pFM7IN1a0bWVEIux5zaBB9QAAAAA";
  const static_url = "https://api.pinterest.com/v1/";
  let data         = null;
  let url          = null;

  switch (component) {
    case "creator-board":
      data = "&fields=first_name%2Cid%2Clast_name%2Curl%2Cbio%2Ccounts%2Cusername%2Cimage";
      url  = static_url + "users/" + reference + token + data;
      console.log("generando user");
      console.log(url);
      break;
    case "board":
      data = "&fields=id%2Cname%2Curl%2Ccounts%2Ccreated_at%2Cprivacy%2Creason%2Ccreator%2Cdescription%2Cimage";
      url  = static_url + "boards/" + "arabelyuska" + "/" + reference + token + data;
      console.log("generando url de board");
      console.log(url);
      break;
    case "pin-list":
      data = "&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Ccolor%2Cmedia%2Cattribution%2Coriginal_link%2Cmetadata%2Cboard%2Ccounts%2Ccreated_at%2Ccreator";
      url  = static_url + "boards/" + "arabelyuska" + "/" + reference + "/pins" + token + data;
      console.log("generando url de lista de pines");
      break;
    case "pin":
      data = "&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Cmetadata%2Cmedia%2Ccounts%2Ccreated_at%2Coriginal_link%2Ccreator%2Cimage";
      url  = static_url + "pins/" + reference + token + data;
      console.log("generando url de pin");
      console.log(url);
      break;
    default:
  }
  return url;
}

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

 //  $.get(url,(data) => {
 //   if (data.status != 200) callback(new Error("Error al obtener la data"));
 //   callback(null,data);
 // });
};
