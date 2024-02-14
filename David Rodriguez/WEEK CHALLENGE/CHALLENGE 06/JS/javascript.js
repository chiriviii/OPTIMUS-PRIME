document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    const randomNumberDisplay = document.getElementById('randomNumber');
    const instruccionsDisplay = document.getElementById('instruccions');
  
button.addEventListener('click', function () {
      const randomNumber = Math.floor(Math.random() * 101);
      randomNumberDisplay.textContent = `  ${randomNumber}`;
window.onload = function () {
      var textToDisplay = 'Random Number';
      var textBox = document.getElementById('my-text-box');
      textBox.innerHTML = textToDisplay;
      };
      
      if (randomNumber >= 0 && randomNumber <= 20) {

        instruccionsDisplay.style.color = 'white';
        document.body.style.backgroundImage = 'url("MEDIA/landscape.jpg")';
        randomNumberDisplay.style.color = 'white';
        button.style.backgroundColor = '#3760B3';
        audio.pause();
        
      } else if (randomNumber >= 20 && randomNumber <= 40) {

        button.style.backgroundColor = '#3760B3';
        document.body.style.backgroundImage = 'url("MEDIA/rocket.jpg")';
        randomNumberDisplay.style.color = 'white';
        instruccionsDisplay.style.color = 'white';
        audio.pause();

      } else if (randomNumber >= 40 && randomNumber <= 60) {

        randomNumberDisplay.style.color = 'white';
        document.body.style.backgroundImage = 'url("MEDIA/PAISSATGE.webp")';
        button.style.backgroundColor ='lightblue';
        audio.pause();
        instruccionsDisplay.style.color = 'white';

      } else if (randomNumber >= 60 && randomNumber <= 80) {

        var audio = new Audio('MEDIA/explosió.mp3');
        audio.play();
        randomNumberDisplay.innerHTML += '<img src="MEDIA/dibuix.png" alt="cohet" style="width: 15%; height: 15%;">';
        randomNumberDisplay.style.color = 'white';
        button.style.backgroundColor = 'white';
        document.body.style.backgroundColor = 'black';
        instruccionsDisplay.style.color = 'lightblue';
        document.body.style.backgroundImage = 'none';

      } else if (randomNumber >= 80 && randomNumber <= 100) {

        instruccionsDisplay.style.color = 'white';
        randomNumberDisplay.style.color = 'white';
        document.body.style.backgroundImage = 'url("MEDIA/terra.jpg")';
        button.style.backgroundColor = '#BBE6F8';
        audio.pause();
      }
    });
  });