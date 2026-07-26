document.getElementById('btnEjecutar5').addEventListener('click', function() {
    // Variables
    let num1;
    let num2;
    let suma;
    let resta;
    let division;
    let multiplicacion;

    // Entrada de datos
    num1 = prompt("Ingrese un número:");
    num2 = prompt("Ingrese otro número:");

    // Validación para asegurar que se ingresaron números válidos
    if (num1 !== null && num2 !== null && num1.trim() !== "" && num2.trim() !== "" && !isNaN(num1) && !isNaN(num2)) {
        
        // Conversión a tipo numérico
        num1 = Number(num1);
        num2 = Number(num2);

        // Operaciones
        suma = num1 + num2;
        resta = num1 - num2;
        multiplicacion = num1 * num2;
        
        // Validación de división entre cero
        if (num2 !== 0) {
            division = (num1 / num2).toFixed(2);
        } else {
            division = "No se puede dividir entre 0";
        }

        // Construcción del HTML para la tarjeta
        let resultado = `
            <p><strong>La suma es:</strong> ${suma}</p>
            <p><strong>La resta es:</strong> ${resta}</p>
            <p><strong>La multiplicación es:</strong> ${multiplicacion}</p>
            <p><strong>La división es:</strong> ${division}</p>
        `;

        // Muestra en la tarjeta sin salir de la página
        document.getElementById('pantalla-resultado5').innerHTML = resultado;

    } else {
        document.getElementById('pantalla-resultado5').innerHTML = "<p>Error: Debe ingresar dos números válidos.</p>";
    }
});