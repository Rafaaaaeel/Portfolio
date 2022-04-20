const containerContent = document.querySelectorAll(".mini-container")

containerContent.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        
        e.querySelector(".button").style.opacity = "1" 

        
    })

    e.addEventListener("mouseout",()=>{
        
        e.querySelector(".button").style.opacity = "0" 
    })
})