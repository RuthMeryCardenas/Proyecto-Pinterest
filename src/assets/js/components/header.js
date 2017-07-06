//COMPONENT HEADER

const Header = () => {
    const nav = $('<nav class="navbar navbar-fixed-top"></nav>');
    const containerFluid = $('<div class="container-fluid container__nav"></div>');
    const collapse = $('<div class="collapse navbar-collapse"' +
        ' id="bs-example-navbar-collapse-1"></div>');

    const navbarHeader = $('<div class="navbar-header"></div>');
    const btnToggle = $('<button type="button" class="navbar-toggle collapsed"' +
        ' data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"' +
        ' aria-expanded="false"></button>');
    const search = $('<span class="icon-search"></span>');
    const navBrand = $('<a class="navbar-brand" href="#"><img' +
        ' src="assets/icons/pinterest-logo.png" alt="Brand"></a>');

    const form = $('<form class="navbar-form navbar-left"></form>');
    const iconSearch = $('<span class="icon-search"></span>');
    const formGroup = $('<div class="form-group"></div>');
    const formControl = $('<input type="text" class="form-control" placeholder="Buscar">');

    const icons = $('<div class="icon"></div>');
    const user = $('<div class="icons"></div>');
    const iconUser = $('<span class="icon-user"></span>');

    const menu = $('<div class="icons"></div>');
    const iconMenu = $('<span class="icon-menu"></span>');

    const comment = $('<div class="icons"></div>');
    const iconComment = $('<span class="icon-coment"></span>');

    const container = $('<div class="container-fluid container__title hidden-sm hidden-xs"></div>');
    const row = $('<div class="row"></div>');
    const divTitle = $('<div class="col-lg-4"></div>');
    const titleBoard = $('<h3 class="transitionOut text-center"><strong>Web UI</strong></h3>');
    const divUp = $('<div class="col-lg-2 col-lg-offset-2 container__icon"></div>');
    const iconUp = $('<span class="icon-up"></span>');
    const btnFollow = $('<div class="col-lg-2 container__btn"><button class="btn btn-danger">Seguir' +
        ' tablero</button></div>');

    let scroll = 0;
    $(window).on('scroll', () => {
        let accionScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (accionScroll > scroll) {
            titleBoard.removeClass('transitionOut');
            titleBoard.addClass('transitionIn');
        }else{
            titleBoard.removeClass('transitionIn');
            titleBoard.addClass('transitionOut');
        }
        scroll = accionScroll;
    },false);

    user.append(iconUser);
    menu.append(iconMenu);
    comment.append(iconComment);

    btnToggle.append(search);
    navbarHeader.append(btnToggle);
    navbarHeader.append(navBrand);

    formGroup.append(iconSearch);
    formGroup.append(formControl);
    form.append(formGroup);
    collapse.append(form);

    containerFluid.append(navbarHeader);
    icons.append(user);
    icons.append(menu);
    icons.append(comment);
    containerFluid.append(collapse);
    containerFluid.append(icons);

    divUp.append(iconUp);
    row.append(divUp);
    divTitle.append(titleBoard);
    row.append(divTitle);
    row.append(btnFollow);
    container.append(row);

    nav.append(containerFluid);
    nav.append(container);

    return nav;
};
