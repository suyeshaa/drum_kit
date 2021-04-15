var drums = document.querySelectorAll(".drum").length;

for(var i=0 ; i< drums ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    var buttonName = this.textContent;
    sound(buttonName);   
    
});
}


    document.addEventListener("keypress" , function(event){
        sound(event.key);
        
    });


function sound(key){
    switch(key){

        case "w":
            var audio = new Audio("sounds/drum1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("sounds/drum2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/drum3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/drum4.mp3");
            audio.play();
            break;

         case "j":
            var audio = new Audio("sounds/drum5.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/drum6.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/drum7.mp3");
            audio.play();
            break;       
     
    }

}


