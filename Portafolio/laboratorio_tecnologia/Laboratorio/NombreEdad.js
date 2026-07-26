document.getElementById('btnEjecutar4').addEventListener('click', function() {
    // Variables
    let nombre;
    let edad;

    // Entrada de datos
    nombre = prompt("Ingrese su nombre:");
    edad = prompt("Ingrese su edad:");

    // Validación de entradas
    if (nombre && edad !== null && edad.trim() !== "" && !isNaN(edad)) {
        edad = Number(edad);

        // Construcción del mensaje
        let resultado = `Bienvenido <strong>${nombre}</strong>, tu edad es: <strong>${edad} años</strong>.`;

        // Muestra en la tarjeta sin salir de la página
        document.getElementById('pantalla-resultado4').innerHTML = `<p>${resultado}</p>`;
    } else {
        document.getElementById('pantalla-resultado4').innerHTML = "<p>Error: Por favor ingrese un nombre y una edad válida.</p>";
    }
});