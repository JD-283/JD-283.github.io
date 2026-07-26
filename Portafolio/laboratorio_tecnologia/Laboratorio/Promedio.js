document.getElementById('btnEjecutar6').addEventListener('click', function() {
    // Variables
    let nota1;
    let nota2;
    let nota3;
    let promedio;

    // Entrada de datos
    nota1 = prompt("Ingrese la primera nota:");
    nota2 = prompt("Ingrese la segunda nota:");
    nota3 = prompt("Ingrese la tercera nota:");

    // Validación de entradas
    if (nota1 !== null && nota2 !== null && nota3 !== null &&
        nota1.trim() !== "" && nota2.trim() !== "" && nota3.trim() !== "" &&
        !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {

        // Conversión a tipo numérico
        nota1 = Number(nota1);
        nota2 = Number(nota2);
        nota3 = Number(nota3);

        // Cálculo
        promedio = (nota1 + nota2 + nota3) / 3;

        // Construcción del resultado
        let resultado = `
            <p><strong>Notas ingresadas:</strong> ${nota1}, ${nota2}, ${nota3}</p>
            <p><strong>El promedio de las notas es:</strong> ${promedio.toFixed(2)}</p>
        `;

        // Muestra el resultado dentro del contenedor de la tarjeta
        document.getElementById('pantalla-resultado6').innerHTML = resultado;

    } else {
        document.getElementById('pantalla-resultado6').innerHTML = "<p>Error: Debe ingresar las tres calificaciones en formato numérico.</p>";
    }
});