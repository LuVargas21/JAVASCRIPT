// CONDICIONAL 
// Funcion que valida si el monto ingresado es igual al precio del producto

function validarMonto() {

    let numero = parseInt(prompt("Ingrese el monto del producto"));

    if (numero < 2500) {
        alert(" El monto ingresado es muy inferior al acreditado");
    } else if (numero == 2500) {
        alert("El monto ingresado es correcto");
    }
}

console.log(validarMonto())