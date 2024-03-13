var dino = document.querySelector(".dino");
var professor = document.querySelector (".professor");

dino.addEventListener("click", function () {
    dino.style.animationPlayState = "running";
})

window.addEventListener("keydown", function (e) {
    console.log("keydown", e);
    if (e.code==="Space") {
    dino.style.animationPlayState = "running";
   }

if (e.code === "ArrowUp") {
    professor.style.animationPlayState = "running";
    professor.style.backgroundPositionY = "0px";

    var top = parseInt(window.getComputedStyle(professor).top);
    console.log("top", top);
    professor.style.top = top - 2 + "px";
 
}

if (e.code === "ArrowDown") {
    professor.style.animationPlayState = "running";
    professor.style.backgroundPositionY = "128px"

    var top = parseInt(window.getComputedStyle(professor).top);
    console.log("top", top);
    professor.style.top = top + 2 + "px";
}

if (e.code === "ArrowRight") {
    professor.style.animationPlayState = "running";
    professor.style.backgroundPositionY = "64px"
//Ara caminara cap a la dreta: sumar a left 5px cada cop que cliquem la tecla
    var left = parseInt(window.getComputedStyle(professor).left);
    console.log("left", left);
    professor.style.left = left + 2 + "px";

}

if (e.code === "ArrowLeft") {
    professor.style.animationPlayState = "running";
    professor.style.backgroundPositionY = "-64px"

    var left = parseInt(window.getComputedStyle(professor).left);
    console.log("left", left);
    professor.style.left = left - 2 + "px";
}
})


window.addEventListener("keyup", function (e) {
        professor.style.animationPlayState = "paused";   /* Nomes camina quan apretem la tecla */
});
