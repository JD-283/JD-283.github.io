document.getElementById('btnEjecutar3').addEventListener('click', function() {
    // Variables y constante
    let precio;
    const valorIva = 0.12;
    let iva;
    let totalConIva;

    // Entrada de datos
    precio = prompt("Ingrese el precio del producto (Q):");

    // Validación de entrada
    if (precio !== null && precio.trim() !== "" && !isNaN(precio)) {
        precio = Number(precio);
        
        // Cálculos
        iva = precio * valorIva;
        totalConIva = precio + iva;

        // Construcción del resultado en HTML
        let resultado = `
            <p><strong>Precio base:</strong> Q${precio.toFixed(2)}</p>
            <p><strong>IVA (12%):</strong> Q${iva.toFixed(2)}</p>
            
        `;

        // Muestra en la tarjeta sin salir de la página
        document.getElementById('pantalla-resultado3').innerHTML = resultado;
    } else {
        document.getElementById('pantalla-resultado3').innerHTML = "<p>Error: Ingrese un precio numérico válido.</p>";
    }
});