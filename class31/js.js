let buttons = document.querySelectorAll("button")

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        let buttonName = buttons[i].innerHTML.toLowerCase()
        let audio = document.querySelector("#" + buttonName)
        audio.currentTime=0
        audio.play()

        // if(buttonName=="a"){
        // let audio = document.querySelector("#a" + buttonName)
        // audio.play()
        // }
        
    })
}
