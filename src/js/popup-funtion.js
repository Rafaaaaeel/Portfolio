const opoyPopupScreen = document.querySelector(".popup-screen-opoy")
const bankeyPopupScreen = document.querySelector(".popup-screen-bankey")

const closebtn = document.querySelector(".close-popup")

const popupCookie = document.cookie.valueOf("popUpShow")


const bankeyPopUp = document.querySelector("#bankey")
const opoyPopUp = document.querySelector("#opoy")

opoyPopUp.addEventListener("click", ()=>{
    opoyPopupScreen.classList.add("popupActive") 
})

bankeyPopUp.addEventListener("click", ()=>{
    bankeyPopupScreen.classList.add("popupActive") 
})





closebtn.addEventListener("click", ()=>{
    bankeyPopupScreen.classList.remove("popupActive")
    opoyPopupScreen.classList.remove("popupActive")
})