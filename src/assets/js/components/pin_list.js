'use strict';

const Grid = (update) => {
  const container = $('<div class="container grid"></div>');
  const row = $('<div class="grid--row"></div>');

		for (var i in state.pins) {
			const div = $('<div class="col-xs-6 col-md-3 item"></div>');
			const btn = $('<button class="btn btn-danger" type="submit"><span class="icon-pin"></span>Guardar</button>');
			const img = $('<img src="" class="img-responsive">');
			const urlImg = state.pins[i].image.original.url;
			const id = state.pins[i].id;

			const user = $('<div class="user row"></div>');
			const imgUser = $('<div class="col-xs-3"></div>');
			const avatar = $('<img src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_280.jpg" class="img-circle" style="width: 100%">');
			const h1 = $('<div class="col-xs-9"><h4>'+state.pins[i].creator.first_name+'</h4></div>');
			const p = $('<p>'+state.pins[i].board.name+'</p>');
			console.log(state.pins[i].metadata);

			img.attr("src", urlImg);
			div.append(btn);
			div.append(img);
			div.append(user);
			user.append(imgUser);
			imgUser.append(avatar);
			user.append(h1);
			h1.append(p);
			row.append(div);

			div.on("click",(e)=>{
				e.preventDefault();
				state.current_pin = id;
			});
		}

  container.append(row);
  return container;
}
