const opoyPopupScreen = document.querySelector(".popup-screen-opoy")
const bankeyPopupScreen = document.querySelector(".popup-screen-bankey")
const menuPopUpScreen = document.querySelector(".popup-screen-menu")

const closebtnOpoy = document.querySelector(".close-popup-opoy")
const closebtnBankey = document.querySelector(".close-popup-bankey")
const closebtnMenu = document.querySelector(".close-popup-menu")

const popupCookie = document.cookie.valueOf("popUpShow")


const bankeyPopUp = document.querySelector("#bankey")
const opoyPopUp = document.querySelector("#opoy")
const menuPopUp = document.querySelector("#menu")

opoyPopUp.addEventListener("click", ()=>{
    opoyPopupScreen.classList.add("popupActive") 
})

bankeyPopUp.addEventListener("click", ()=>{
    bankeyPopupScreen.classList.add("popupActive") 
})

menuPopUp.addEventListener("click", ()=>{
    menuPopUpScreen.classList.add("popupActive") 
})




closebtnOpoy.addEventListener("click", ()=>{
    opoyPopupScreen.classList.remove("popupActive")
})

closebtnBankey.addEventListener("click", ()=>{
    bankeyPopupScreen.classList.remove("popupActive")
})

closebtnMenu.addEventListener("click", ()=>{
    menuPopUpScreen.classList.remove("popupActive")
})