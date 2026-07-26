document.getElementById('btnEjecutar1').addEventListener('click', function() {
    // Variables y constante de tipo de cambio
    let quetzales;
    const dolares = 7.80;
    let conversion;

    // Entrada de datos con validación
    quetzales = prompt("Ingrese una cantidad en Quetzales (Q):");

    if (quetzales !== null && quetzales.trim() !== "" && !isNaN(quetzales)) {
        quetzales = Number(quetzales);

        // Cálculo de conversión
        conversion = quetzales / dolares;

        // Formato de resultado
        let resultado = `
            <p><strong>Monto ingresado:</strong> Q${quetzales.toFixed(2)}</p>
            <p><strong>Equivalente en dólares:</strong> $${conversion.toFixed(2)} USD</p>
        `;

        // Muestra en la tarjeta sin salir de la página
        document.getElementById('pantalla-resultado1').innerHTML = resultado;
    } else {
        document.getElementById('pantalla-resultado1').innerHTML = "<p>Error: Por favor ingrese una cantidad numérica válida.</p>";
    }
});