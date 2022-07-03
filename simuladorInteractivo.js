// SIMULADOR INTERACTIVO 
//UNA APP QUE CALCULE EL COSTO DE DISTINTAS OPCIONES DE ALOJAMIENTO.
let destinoIngresado = prompt("Ingrese un destino nacional");
let cantidadNochesIngresadas = prompt("Ingrese el numero de noches de su estadia");

function calcularPrecioEstadia(destino, cantidadNoches) {
    let precioDeEstadia = cantidadNoches * calcularPrecioPorNoche(destino);
    return precioDeEstadia;
}

// devuelve el precio por noche de acuerdo al destino pasado por parametro
function calcularPrecioPorNoche(destino) {
    let precioXNoche = 0;
    switch (destino) {
        case "mendoza":
            precioXNoche = 3500;
            break;
        default:
            precioXNoche = 4000;
            break;
    }
    return precioXNoche;
}

alert("El precio de la estadia es: " + calcularPrecioEstadia(destinoIngresado, cantidadNochesIngresadas));