let amigos = [];
let contador=0;

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo) {
        amigos.push(amigo);
        document.getElementById('amigo').value = ''; 
        mostrarListaAmigos(); 
    } else {
        alert("Por favor inserta un nombre");
    }
}
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
        console.log(`Amigo ${i + 1}: ${amigos[i]}`);
    }
    console.log("Lista de amigos actualizada:", amigos);
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    } else if  (contador > 0) {
        alert("Sorteo Finalizado.");
        amigos.length = 0;
        contador = 0;
        document.getElementById('listaAmigos').innerHTML = ''
    } else {
        contador++;
       let aleatorio = Math.floor(Math.random() * amigos.length);
       console.log('aleatorio :' + aleatorio);
         let amigoSeleccionado = amigos[aleatorio];
         console.log('amigoSeleccionado :' + amigoSeleccionado);
            document.getElementById('listaAmigos').innerHTML = 'El amigo seleccionado es: ' + amigoSeleccionado;
           // alert(`El amigo seleccionado es: ${amigoSeleccionado}`);                                 
    }  

}