const menu =document.getElementById("nav-menu")
const menuButton = document.getElementById("menu-btn")
const navLink = document.getElementsByClassName("nav-link")

// destructe the html collection
const navLinkarr = [...navLink]
console.log(navLinkarr)


menuButton.addEventListener("click", () =>{
    console.log("working")
    menu.classList.toggle("show")
})

// remove menu when link is clicked

navLinkarr.forEach(link => {
   link.addEventListener("click", ()=>{
    menu.classList.remove("show")
   })
    
});