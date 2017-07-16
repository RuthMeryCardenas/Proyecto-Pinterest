'use strict';

const Grid = (update) => {
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="grid--row card-columns"></div>');

  for (let i in state.pins) {
    const id = state.pins[i].id;
    const div = $('<div class="card item" data-toggle="modal"' +
        ' data-target="#exampleModal" data-id="'+ id +'"></div>');
		const shareIcon = $('<button class="btn share btn-sm" type="submit"><i class="fa fa-upload" aria-hidden="true"></i></button>');
    const btn = $('<button class="btn btn-danger btn-sm" type="submit"><span class="icon-pin"></span>Guardar</button>');
    const img = $('<img src="" class="img-fluid">');
    const urlImg = state.pins[i].image.original.url;

    const user = $('<div class="user row"></div>');
    const imgUser = $('<div class="col col-3"></div>');
    const avatar = $('<img class="rounded-circle" style="width: 100%">').attr('src',state.creator_board.image['60x60'].url);
    const h1 = $('<div class="col col-9"><h4>'+state.pins[i].creator.first_name+'</h4></div>');
    const p = $('<p>'+state.pins[i].board.name+'</p>');

    img.attr("src", urlImg);
		div.append(shareIcon);
    div.append(btn);
    div.append(img);
    div.append(user);

		if(state.pins[i].metadata.article != undefined) {
			console.log(state.pins[i].metadata.article);
			const title = $('<h4>' + state.pins[i].metadata.article.name + '</h4>');
			user.append(title);

			if(state.pins[i].metadata.article.description != "") {
				const description = $('<h6>' + state.pins[i].metadata.article.description + '</h6>');
				user.append(description);
			}
		}

    user.append(imgUser);
    imgUser.append(avatar);
    user.append(h1);
    h1.append(p);
    row.append(div);

    /*div.on("click",(e)=>{
        e.preventDefault();
        state.current_pin = id;
    });*/
  }

  container.append(row);
  return container;
};
