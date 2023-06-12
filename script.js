
const menuBtn = document.getElementById("mmenu-btn")
const menuNav = document.getElementById("main-nav")
const menuBtnsrc =  menuBtn.src
menuBtn.addEventListener("click", (e)=>{
    menuNav.classList.toggle("show")
    if(menuNav.classList.contains("show")){
        menuBtn.src ="images/icon-close.svg"
    }
    else{
        menuBtn.src = menuBtnsrc
    }
})