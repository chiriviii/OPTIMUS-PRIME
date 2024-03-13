var name="Jordi"; // text
var number=12;// number
var float=12.5;// decimal number
var boolean=true;// true or false
var array= ["Jordi", "Pau", "Marc"];// list of values
var object={name:"Jordi", age:21};

console. log("Starting my webpage..");
console.log("My name is Alba");
console.log(array[1]);
console.log(object.name + "has" + object.age + "each leg");

//

var title = document.querySelector(".container h1");
var body= document.querySelector("body");
var audio = document.querySelector()

var red = 0;
var green = 0;
var blue = 0;

// create an event for title (click)
title.addEventListener("click", function(){
// change the color of title
    red = Math.random()* 256;
    red = Math.floor(red);

    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    
    body.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
    console.log("rgb(" + red + "," + green + "," + blue + ")")
});
