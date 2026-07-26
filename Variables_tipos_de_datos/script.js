document.getElementById('btnEjecutar').addEventListener('click', function() {
    // 1. Ejecutas tu lógica o función
    let nombre = prompt("ingrese su nombre")
    const resultado = ("¡Hola! " + nombre + " Este es el resultado del script");

    // 2. Lo muestras dentro de la tarjeta
    document.getElementById('pantalla-resultado').innerHTML = `<p>${resultado}</p>`;
});