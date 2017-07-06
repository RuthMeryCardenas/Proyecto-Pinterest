//COMPONENT HEADER

const Header = () => {
    const nav = $('<nav class="navbar navbar-default navbar-fixed-top"></nav>');
    const container = $('<div class="container"></div>');
    const p = $('<p>Hola!!</p>');

    container.append(p);
    nav.append(container);

    return nav;
};
