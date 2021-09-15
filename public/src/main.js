const menu =document.getElementById("nav-menu")
const menuButton = document.getElementById("menu-btn")

menuButton.addEventListener("click", () =>{
    console.log("working")
    menu.classList.toggle("show")
})