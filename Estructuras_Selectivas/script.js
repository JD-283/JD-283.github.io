document.getElementById('btnEjecutar').addEventListener('click', function() {
    // 1. Ejecutas tu lógica o función
    //Ejemplo: Elaborar un programa que calcule el promedio de  3 calificaciones y determinar si el curso se aporbo o reprobo
//Variables
let Nota1;
let Nota2;
let Nota3;
let Promedio;
let Curso;
let resultado;
//entrada de datos
Curso = prompt ("Ingrese el nombre del curso")
Nota1 = prompt ("Ingrese la calificacion de la Unidad 1")
Nota2 = prompt ("Ingrese la calificacion de la Unidad 2")
Nota3 = prompt ("Ingrese la calificacion de la Unidad 3")

Promedio = (Number(Nota1)+Number(Nota2)+Number(Nota3))/3;


if (Promedio >= 60) {
        resultado = `Felicidades, aprobó el curso <strong>${Curso}</strong> con un promedio de <strong>${Promedio.toFixed(2)}</strong>.`;
    } else {
        resultado = `Lamentablemente no aprobó el curso <strong>${Curso}</strong>. Su promedio fue de <strong>${Promedio.toFixed(2)}</strong>.`;
    }
    

    // 2. Lo muestras dentro de la tarjeta
    document.getElementById('pantalla-resultado').innerHTML = `<p>${resultado}</p>`;
});