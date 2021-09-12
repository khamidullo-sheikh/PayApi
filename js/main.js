let navMenu = document.querySelector(".nav_menu");
let btnOpen = document.querySelector(".burger--js");
let btnClose = document.querySelector(".button_close");
btnOpen.addEventListener("click", function(){
    navMenu.classList.add("nav_menu--m");
});

btnClose.addEventListener("click", function(){
    navMenu.classList.remove("nav_menu--m");
});