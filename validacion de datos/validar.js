document.getElementById('btnEjecutar').addEventListener('click', function() {
    // Variables
    let num1;
    let num2;
    let suma;
    let resta;
    let division;
    let multiplicacion;

    // Entrada y validación del primer número
    num1 = prompt("Ingrese un número");
    while (num1 === null || num1.trim() === "" || isNaN(num1)) {
        num1 = prompt("Error: debe ingresar un número válido. Intente de nuevo:");
    }
    num1 = Number(num1);

    // Entrada y validación del segundo número
    num2 = prompt("Ingrese otro número");
    while (num2 === null || num2.trim() === "" || isNaN(num2)) {
        num2 = prompt("Error: debe ingresar un número válido. Intente de nuevo:");
    }
    num2 = Number(num2);

    // Operaciones
    suma = num1 + num2;
    resta = num1 - num2;
    multiplicacion = num1 * num2;
    
    // Control para evitar división entre cero
    if (num2 !== 0) {
        division = (num1 / num2).toFixed(2);
    } else {
        division = "No se puede dividir entre cero";
    }

    // Construcción del resultado en formato HTML
    let resultado = `
        <p><strong>Suma:</strong> ${num1} + ${num2} = ${suma}</p>
        <p><strong>Resta:</strong> ${num1} - ${num2} = ${resta}</p>
        <p><strong>Multiplicación:</strong> ${num1} × ${num2} = ${multiplicacion}</p>
        <p><strong>División:</strong> ${num1} ÷ ${num2} = ${division}</p>
    `;

    // Muestra los resultados en la tarjeta sin recargar la página
    document.getElementById('pantalla-resultado').innerHTML = resultado;
});