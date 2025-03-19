// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre == "" || !isNaN(parseFloat(nombre))) {
        alert("Por favor, ingrese un nombre válido.");
        document.getElementById("amigo").value = "";
        return;
    }

    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}