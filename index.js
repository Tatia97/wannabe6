let menuButton = document.getElementById("menu-button")
let menuButtonCls = document.getElementById("menu-button-close")
let navbarHdr = document.getElementById("navbarHeader")



menuButton.onclick = function sandwichMenu() {
    navbarHdr.style.display = "block";
    document.getElementById("header-none").style.display = "none";
}
menuButtonCls.onclick = function sandwichMenu() {
    navbarHdr.style.display = "none";
    document.getElementById("header-none").style.display = "block";
}


