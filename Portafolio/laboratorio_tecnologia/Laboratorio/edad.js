document.getElementById('btnEjecutar2').addEventListener('click', function() {
    // Variables
    let edad;
    let resultado;

    // Entrada de datos
    edad = prompt("Ingrese su edad:");

    // Validación para asegurar que ingresó un número válido
    if (edad !== null && edad.trim() !== "" && !isNaN(edad)) {
        edad = Number(edad);

        // Evaluación de mayoría de edad
        if (edad < 18) {
            resultado = `Tiene <strong>${edad} años</strong>: Usted es <strong>menor de edad</strong>.`;
        } else {
            resultado = `Tiene <strong>${edad} años</strong>: Usted es <strong>mayor de edad</strong>.`;
        }

        // Muestra la respuesta en la tarjeta sin salir de la página
        document.getElementById('pantalla-resultado2').innerHTML = `<p>${resultado}</p>`;
    } else {
        document.getElementById('pantalla-resultado2').innerHTML = "<p>Error: Por favor ingrese una edad válida en números.</p>";
    }
});