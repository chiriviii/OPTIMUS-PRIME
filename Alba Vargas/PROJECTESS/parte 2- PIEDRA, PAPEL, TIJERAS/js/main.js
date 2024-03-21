let puntosUsuario = 0;
let puntosPC = 0;
let username = "";

// Array para almacenar nombres de usuario y puntajes
let ranking = [];

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");
let reiniciar = document.querySelector("#reiniciar");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function startGame() {
    username = document.getElementById('username').value;
    document.getElementById('record').innerText = `Welcome, ${username}!`;
}

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    // piedra => 0
    // papel => 1
    // tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra🪨";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel📋"
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera✂️"
    }

    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate

    if (
        (eleccionUsuario === "piedra🪨" && eleccionPC === "tijera✂️") ||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📋") ||
        (eleccionUsuario === "papel📋" && eleccionPC === "piedra🪨")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
        (eleccionPC === "tijera✂️" && eleccionUsuario === "papel📋") ||
        (eleccionPC === "papel📋" && eleccionUsuario === "piedra🪨")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            instrucciones.innerText = "🔥 ¡Ganaste el juego! 🔥"
            registrarGanador(username, puntosUsuario);
        }

        if (puntosPC === 5) {
            instrucciones.innerText = "😭 ¡La computadora ganó el juego! 😭"
        }

        mostrarRanking();
        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }


}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana."
}

// Función para registrar ganador en el ranking
function registrarGanador(username, puntos) {
    ranking.push({username, puntos});
}

// Función para mostrar el ranking
function mostrarRanking() {
    // Limpiar el contenido anterior
    let rankingList = document.getElementById("ranking");
    rankingList.innerHTML = "";
    
    // Ordenar el array de ranking por puntajes
    ranking.sort((a, b) => b.puntos - a.puntos);

    // Mostrar los nombres de usuario y puntajes en el ranking
    ranking.forEach((jugador, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${jugador.username} - ${jugador.puntos} puntos`;
        rankingList.appendChild(listItem);
    });
}
