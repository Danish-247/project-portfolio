function togglemenu() {
    const menu = document.querySelector (".menu-links");
    const icon = document.querySelector (".humburger-icons");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}