// JS here

menu = document.querySelector(".menu");

document.querySelector(".hamburger").addEventListener("click",show_hamburger);

function show_hamburger(){
    menu.classList.toggle("show");
}
