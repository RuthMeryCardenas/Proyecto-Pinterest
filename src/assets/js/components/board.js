const Board = () => {
    const container = $('<div class="container container__userboard"></div>');
    const row = $('<div class="row"></div>');
    const info = $('<div class="col-xs-6 col-lg-2 col-lg-offset-2"></div>');
    const divimage = $('<div class="col-lg-2 col-lg-offset-4 col-xs-6 container__img"></div>');
    const img = $('<img src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_280.jpg">');

    const divBtn = $('<div class="hidden-lg container__btn-follow"></div>');
    const btnFollow = $('<button class="btn btn-default"><strong>Seguir tablero</strong></button>');

    const nameBoard = $('<h1><strong>Web UI</strong></h1>');
    const pines = $('<p>30 Pines</p>');
    const followers = $('<p>84 Seguidores</p>');

    info.append(nameBoard);
    info.append(pines);
    info.append(followers);

    divBtn.append(btnFollow);
    container.append(divBtn);
    row.append(info);
    divimage.append(img);
    row.append(divimage);
    container.append(row);

    return container;
};
