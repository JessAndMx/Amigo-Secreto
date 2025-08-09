let listaAmigos = [];
let amigosSorteados = [];
let amigoSorteado = "";

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        listaAmigos.push(nombreAmigo);
        document.getElementById('amigo').value = "";
        mostrarListaAmigos();
    }
}

function mostrarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        listaHTML.innerHTML += "<li>" + listaAmigos[i] + "</li>";
    }
}

function generarAmigoSorteado() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear.");
    }

    if (amigosSorteados.length === listaAmigos.length) {
        alert("Ya se han sorteado todos los amigos.");
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let nombreGenerado = listaAmigos[indiceAleatorio];

    for (let i = 0; i < amigosSorteados.length; i++) {
        if (amigosSorteados[i] === nombreGenerado) {
            return generarAmigoSorteado();  
        }
    }

    amigosSorteados.push(nombreGenerado);
    return nombreGenerado;
}

function sortearAmigo() {
    let amigo = generarAmigoSorteado();

    if (amigo !== ' ') {
        amigoSorteado = amigo;
        document.getElementById('resultado').innerHTML = "<li>" + amigoSorteado + "</li>";
        document.getElementById('reiniciar').disabled = false;
    }
}

function reiniciarSorteo() {
    amigosSorteados = [];
    amigoSorteado = "";
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('reiniciar').disabled = true;
}
