

document.getElementById('btnEjecutar2').addEventListener('click', function () {
    // 1. Ejecutas tu lógica o función
    //variables
    let num1;
    let num2;
    let suma;
    let resta;
    let division;
    let multiplicacion;

    //entrada de datos
    num1 = prompt("Ingrese un numero");
    num2 = prompt("Ingrese otro numero");
    //conversion
    num1 = Number(num1);
    num2 = Number(num2)
    //operacion
    suma = num1 + num2;
    resta = num1 - num2;
    division = num1 / num2;
    multiplicacion = num1 * num2;

    //salida de datos

    const resultado = (`la suma es ${suma}<br>la resta es ${resta}<br>la multiplicacion es ${multiplicacion}<br>la division es ${division}`);

    // 2. Lo muestras dentro de la tarjeta
    document.getElementById('pantalla-resultado2').innerHTML = `<p>${resultado}</p>`;
});