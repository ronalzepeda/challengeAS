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
    } else {
        alert("Por favor inserta un nombre");
    }
    console.log(amigos);
    asignaTxtElement('listaAmigos', amigos.join(', '));
}

asignaTxtElement = (id, txt) => {
    let elementHTML = document.getElementById(id).innerText = txt;
    return elementHTML;
}