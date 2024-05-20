
let bt = document.querySelectorAll(".drum")


//for begginer
for(let i=0; i < bt.length; i++){
    bt[i].addEventListener("click", handleClick)
}

document.addEventListener("keydown", (event) => {
    let keyboard = event.key;
    handleClick(keyboard)
});

// for advanced
// bt.forEach((item) => { item.addEventListener("click", handleClick) })


function handleClick(keyboard = 0){
    let key = this.innerHTML;
    let audio;
    switch (key || keyboard) {
        case "w":
            audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        default:
            console.log("invalid option clicked")
            break;
    }
}