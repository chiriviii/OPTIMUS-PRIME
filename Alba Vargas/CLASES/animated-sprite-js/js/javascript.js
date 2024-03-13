const dino = document.querySelector('.dino');
const professor = document.querySelector('.professor');
const speed = 5;

window.addEventListener("keydown", (event) => {
    console.log(event)
    dino.style.animationPlayState = "running";
    professor.style.animationPlayState = "running";
    var left = window.getComputedStyle(professor).left;
    var top = window.getComputedStyle(professor).top;
  
    console.log(left,top);
    
    
    if (event.code =="ArrowRight"){
       professor.style.backgroundPositionY = "64px";
       dino.style.transform = "scaleX(+1)"

       if (parseInt(left)<=1200){
        professor.style.left = parseInt(left) + speed + "px";
       }
       
    }

    if (event.code =="ArrowLeft"){
        dino.style.transform = "scaleX(-1)"
        professor.style.backgroundPositionY = "-64px";

        if(parseInt(left)>=0){
            professor.style.left = parseInt(left) - speed + "px";

        }
        
        
     }

     if (event.code =="ArrowDown"){
        professor.style.backgroundPositionY = "128px";

        if(parseInt(top)<= 336){
            professor.style.top= parseInt(top) + speed + "px";

        }
        
     }

     if (event.code =="ArrowUp"){
        professor.style.backgroundPositionY = "0px";

        if(parseInt(top)>= 0){
            professor.style.top = parseInt(top) - speed + "px";

        }
       
     }
    

});

window.addEventListener("keyup", (event) => {
   professor.style.animationPlayState = "running";
});   