document.getElementById('btnEjecutar').addEventListener('click', function() {
    // Variables
    let palabra;
    let resultado;

    // Entrada de datos
    palabra = prompt("Ingrese una palabra del vocabulario para su traducción:");

    // Si el usuario ingresó algo, lo pasamos a minúsculas para evitar errores
    if (palabra) {
        palabra = palabra.toLowerCase().trim();

        // Evaluamos la palabra con switch
        switch (palabra) {
            case "rojo":
                resultado = "Rojo: <strong>Red</strong>";
                break;
            case "manzana":
                resultado = "Manzana: <strong>Apple</strong>";
                break;
            case "perro":
                resultado = "Perro: <strong>Dog</strong>";
                break;
            case "gato":
                resultado = "Gato: <strong>Cat</strong>";
                break;
            case "naranja":
                resultado = "Naranja: <strong>Orange</strong>";
                break;
            default:
                resultado = "La palabra ingresada no corresponde al vocabulario.";
                break;
        }
    } else {
        resultado = "No ingresaste ninguna palabra.";
    }

    // Muestra el resultado dentro del contenedor sin recargar ni salir de la página
    document.getElementById('pantalla-resultado').innerHTML = `<p>${resultado}</p>`;
});