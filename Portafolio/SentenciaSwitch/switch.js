document.getElementById('btnEjecutar').addEventListener('click', function() {
    // Variables
    let dia;
    let resultado;

    // Entrada de datos
    dia = prompt("Ingrese un día de la semana (ej: Lunes, Martes...):");

    if (dia !== null && dia.trim() !== "") {
        dia = dia.toLowerCase().trim();

        // Conversión a binario según el día
        switch (dia) {
            case "lunes":
                resultado = "Lunes en binario es: <strong>000</strong>";
                break;
            case "martes":
                resultado = "Martes en binario es: <strong>001</strong>";
                break;
            case "miercoles":
            case "miércoles": 
                resultado = "Miércoles en binario es: <strong>010</strong>";
                break;
            case "jueves":
                resultado = "Jueves en binario es: <strong>011</strong>";
                break;
            case "viernes":
                resultado = "Viernes en binario es: <strong>100</strong>";
                break;
            case "sabado":
            case "sábado":
                resultado = "Sábado en binario es: <strong>101</strong>";
                break;
            case "domingo":
                resultado = "Domingo en binario es: <strong>110</strong>";
                break;
            default:
                resultado = "El texto ingresado no es un día de la semana válido.";
                break;
        }
    } else {
        resultado = "No ingresaste ningún día.";
    }

    // Muestra la salida dentro del DIV de la tarjeta sin salir de la página
    document.getElementById('pantalla-resultado').innerHTML = `<p>${resultado}</p>`;
});