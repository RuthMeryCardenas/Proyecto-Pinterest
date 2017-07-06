const Board = () => {
    const container = $('<div class="container container__userboard"></div>');
    const row = $('<div class="row"></div>');
    const info = $('<div class="col-lg-2 col-lg-offset-2"></div>');
    const image = $('<div class=" col-lg-2 col-lg-offset-4"></div>');

    const nameBoard = $()

    /*get(urlGenerate('creator-board'), (err, data) => {

    });*/

    get(urlGenerate('board'),(err,data) => {
        state.creator_board = data.data;
        console.log(state.creator_board);
    });

    row.append(info);
    row.append(image);
    container.append(row);

    return container;
};
