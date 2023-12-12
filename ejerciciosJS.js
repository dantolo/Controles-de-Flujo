/** Ejercicio 1 */

function Votacion(edad) {
    if (edad >= 18) {
        console.log("La persona puede votar.");
    } else {
        console.log("La persona no tiene edad suficiente para votar.");
    }
}
console.log("Ejercicio 1");
//pruebas 
Votacion(20);
Votacion(15);

/** Ejercicio 2 */

function esDivisiblePor7y8(numero) {
    if (numero % 7 === 0 && numero % 8 === 0) {
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }
}
console.log("Ejercicio 2")
// Casos de prueba
esDivisiblePor7y8(56);  // Verdadero
esDivisiblePor7y8(7);   // Falso
esDivisiblePor7y8(8);   // Falso
esDivisiblePor7y8(0);   // Verdadero
esDivisiblePor7y8(224); // Verdadero
esDivisiblePor7y8(73);  // Falso

/** Ejercicio 3 */ 

function esDivisiblePor49(numero) {
    if (numero % 4 === 0 || numero % 9 === 0) {
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }
}
console.log("Ejercicio 3");
//casos prueba
esDivisiblePor49(56);  // Verdadero
esDivisiblePor49(7);   // Falso
esDivisiblePor49(8);   // Falso
esDivisiblePor49(0);   // Verdadero
esDivisiblePor49(224); // Verdadero
esDivisiblePor49(73);  // Falso

/** Ejercicio 4 */

function recomendarPelicula(categoria) {
    switch (categoria.toLowerCase()) {
        case 'accion':
            console.log("Recomendación: Avengers");
            break;
        case 'drama':
            console.log("Recomendación: The Shawshank Redemption");
            break;
        case 'comedia':
            console.log("Recomendación: Superbad");
            break;
        case 'romance':
            console.log("Recomendación: The Notebook");
            break;
        case 'suspenso':
            console.log("Recomendación: Inception");
            break;
        case 'terror':
            console.log("Recomendación: The Conjuring");
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
}


console.log("Ejercicio 4");
recomendarPelicula("accion");
recomendarPelicula("drama");
recomendarPelicula("comedia");
recomendarPelicula("romance");
recomendarPelicula("terror");



/** Ejercicio 5 */

function accionCajero(opcion) {
    if (opcion === 1) {
        console.log("Retirando dinero...");
    } else if (opcion === 2) {
        console.log("Realizando transferencia...");
    } else if (opcion === 3) {
        console.log("Depósito exitoso.");
    } else if (opcion === 4) {
        console.log("Realizando pago de servicios...");
    } else {
        console.log("Opción no válida.");
    }
}
console.log("ejercicio 5")
accionCajero(1);


/** Ejercicio 6 */

function convertirDivisa(cantidad, opcion) {
    switch (opcion) {
        case 1:
            console.log(`USD: ${cantidad * 0.05}`);
            break;
        case 2:
            console.log(`EUR: ${cantidad * 0.045}`);
            break;
        case 3:
            console.log(`JPY: ${cantidad * 5.5}`);
            break;
        case 4:
            console.log(`GBP: ${cantidad * 0.04}`);
            break;
        case 5:
            console.log(`CHF: ${cantidad * 0.047}`);
            break;
        default:
            console.log("Opción no válida.");
    }
}
console.log("ejercicio 6")
convertirDivisa(1500, 1);


// 1. Convertir minutos a segundos
function minutosASegundos(minutos) {
    return minutos * 60;
}

// Ejemplos de uso
var minutos1 = 5;
var segundos1 = minutosASegundos(minutos1);
console.log(minutos1 + " minutos es igual a " + segundos1 + " segundos.");