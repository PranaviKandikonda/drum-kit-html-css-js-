
//for detecting button presses
const buttons = document.querySelectorAll(".drum");
for(var i=0;i < buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        addAnimation(buttoninnerHTML);
    })
}

//for detecting keyboard presses
document.addEventListener("keydown", function(e){
    makeSound(e.key);
    addAnimation(e.key);
})

//for generating the sound
function makeSound(key){
        switch(key){
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(buttoninnerHTML);
    }
}

//for adding animation to the buttons that were clicked
function addAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}


