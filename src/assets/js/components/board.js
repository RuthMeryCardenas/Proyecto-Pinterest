const Board = () => {
    const container = $('<div class="container container__userboard"></div>');
    const row = $('<div class="row"></div>');
    const info = $('<div class="col-xs-6 col-lg-2 col-lg-offset-2"></div>');
    const divimage = $('<div class="col-lg-2 col-lg-offset-4 col-xs-6 container__img"></div>');
    const img = $('<img/>').attr('src',state.creator_board.image['60x60'].url);



    const divBtn = $('<div class="hidden-lg container__btn-follow"></div>');
    const btnFollow = $('<button class="btn btn-default"><strong>Seguir tablero</strong></button>');

    const nameBoard = $('<h1><strong>   '+ state.board.name +'</strong></h1>');
    const pines = $('<p>'+state.board.counts.pins+' Pines</p>');
    const followers = $('<p>'+state.board.counts.followers+' Seguidores</p>');

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
