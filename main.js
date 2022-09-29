function load() {
    var element = $(this);
    element.fadeOut(0, function() {
    element.fadeIn(1000);
    });
}

window.addEventListener('load', function() {
    $('.load').one('appear', load);
})

let menuOpened = false; 

const openMenu = () => {
    document.querySelector(".navinner").classList.add("is-open");
};
const closeMenu = () => {
    document.querySelector(".navinner").classList.remove("is-open");
};

const showMenu = () => {
    menuOpened = !menuOpened;
    if (menuOpened) {
        openMenu();
    } else {
        closeMenu();
    }
};