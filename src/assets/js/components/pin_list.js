'use strict';

const Grid = (update) => {
  const container = $('<div id="grid" class="container"></div>');
  const row = $('<div class="row"></div>');

		for (var i in state.pins) {
			const div = $('<div class="col-xs-6 col-md-3"></div>');
			const img = $('<img src="" class="img-responsive">');
			const url = state.pins[i].image.original.url;
			const id = state.pins[i].id;

			const user = $('<div class="row"></div>');
			const imgUser = $('<div class="col-xs-2"></div>');
			const avatar = $('<img src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_280.jpg" class="img-circle" style="width: 50px">');
			const h1 = $('<div class="col-xs-10"><h1>'+state.pins[i].creator.first_name+'</h1></div>');
			const p = $('<p>'+state.pins[i].board.name+'</p>');
			console.log(state.pins[i].metadata);

			img.attr("src", url);
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
