const myModal = () => {
  const modal =  $('<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div>');
  const close_btn = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
  const modal_dialog = $('<div class="modal-dialog" role="document">vacio</div>');

  modal.append(close_btn);
  modal.append(modal_dialog);

  modal.on('show.bs.modal', function (e) {
    console.log("El modal se está abriendo");
    load_ContentModal ($(e.currentTarget).find(".modal-dialog"));
  });

  modal.on('hidden.bs.modal', function (e) {
    console.log("El modal se está cerrando");
  });
  return modal;
}

const load_ContentModal = (container) => {
  container.empty();

  const modal_content = $('<div class="modal-content container-fluid"></div>');

  modal_content.append(Modal_header());
  getJSON(generate_url("pin",state.current_pin), (err, json) => {
    if (err) { return alert(err.message);}
    state.current_pin = json.data;
    console.log(state.current_pin);
    modal_content.append(Modal_body(state.current_pin));
  });
  $(container).append(modal_content);
}


const Modal_header = () => {
  const modal_header = $('<div class="modal-header"></div>');
  const row_1 = $('<div class="row"></div>');
  const col_1 = $('<div class="col-xs-9 icons"></div>');
  const icon_up = $('<span class="icon-up"></span>');
  const icon_check = $('<span class="icon-check"></span>');
  const icon_more = $('<span class="icon-more"></span>');
  const icon_more_path1 = $('<path class="path1"></path>');
  const icon_more_path2 = $('<path class="path2"></path>');
  const icon_more_path3 = $('<path class="path3"></path>');

  const col_2 = $('<div class="col-xs-3 save"></div>');
  const save_btn = $('<button class="btn btn-danger"type="button"><span class="icon-pin"></span>Guardar</button>');

  icon_more.append(icon_more_path1);
  icon_more.append(icon_more_path2);
  icon_more.append(icon_more_path3);

  col_1.append(icon_up);
  col_1.append(icon_check);
  col_1.append(icon_more);
  col_2.append(save_btn);

  row_1.append(col_1);
  row_1.append(col_2);

  modal_header.append(row_1);

  return modal_header;
}


const Modal_body = (pin) => {
  const modal_body = $('<div class="modal-body"></div>');
  const row_1 = $('<div class="row"></div>');
  const pin_title = $('<div class="col-xs-12 pin-title">prueba</div>');
  // const pin_title = $('<div class="col-xs-12 pin-title">' + pin.metadata.article.name +'</div>');
  const row_2 = $('<div class="row"></div>');
  const pin_container_image = $('<div class="col-xs-12 pin-image"></div>');
  const pin_image = $('<img src="' + pin.image.original.url + '" alt="">');
  const pin_author = $('<div class="row pin-author"></div>');
  const author_brand = $('<div class="col-xs-1 brand"></div>');
  const author_brand_image = $('<img class="img-responsive" src="' + pin.metadata.link.favicon +'" alt="">');
  // const author_siteName = $('<div class="col-xs-9 site-name">Artículo de </div>');
  // const author_Name = $('<span>' + pin.metadata.link.site_name +'</span>');
  // const author_readingIt = $('<div class="col-xs-2 reading-it"></div>');
  // const readingIt_btn = $('<a href="' + pin.original_link + '" class="btn btn-default" target="_blank">Leerlo</a>');

  row_1.append(pin_title);

  pin_container_image.append(pin_image);
  row_2.append(pin_container_image);

  author_brand.append(author_brand_image);
  pin_author.append(author_brand);

  // author_siteName.append(author_Name);
  // pin_author.append(author_siteName);

  // author_readingIt.append(readingIt_btn);
  // pin_author.append(author_readingIt);

  modal_body.append(row_1);
  modal_body.append(row_2);
  // modal_body.append(pin_author);

  return modal_body;
}
