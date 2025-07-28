let amigos = [];

//amigos.push(document.getElementById('amigo').value);
//let nombres = document.getElementById('amigo').value;

//console.log(nombres);
//amigos.push(nombres);

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo) {
        amigos.push(amigo);
        document.getElementById('amigo').value = ''; 
        mostrarListaAmigos(); 
    } else {
        alert("Por favor inserta un nombre");
    }
    //console.log(amigos);
    //asignaTxtElement('listaAmigos', amigos.join(', '));
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

/*asignaTxtElement = (id, textoAmigo) => {
    let elementHTML = document.getElementById(id).innerText = textoAmigo;
    return elementHTML;
}*/

