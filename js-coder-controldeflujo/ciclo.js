// CICLO FOR 
// Funcion que asigna turnos a cada numero de documento ingresado, con un maximo de 15 turnos en cada ejecución

function asignarTurnos() {

    for (let i = 0; i < 15; i++) {
        let nroDocumento = prompt("Ingrese su numero de documento");

        let numeroDeTurno = i;
        alert("Hola dni: " + nroDocumento + ". Se le ha asignado el turno" + " " + numeroDeTurno);
    }
    alert("No hay mas turnos disponibles para esta fecha.")

}

console.log(asignarTurnos())