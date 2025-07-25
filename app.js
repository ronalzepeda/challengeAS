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
        console.log(amigos);
    } else {
        console.log("Por favor inserta un nombre");
    }
}
