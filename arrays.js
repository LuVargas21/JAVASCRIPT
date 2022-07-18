//  CREACIÓN DE OBJETOS DENTRO DE UN ARRAY
const destinos = [
	{
		id: 1,
		nombre: "bariloche",
		categoria: "nacional",
		temporada: "invierno",
		valorPorNoche: 3500,
	},

	{
		id: 2,
		nombre: "buenos aires",
		categoria: "nacional",
		temporada: "todo el año",
		valorPorNoche: 2900,
	},
	{
		id: 3,
		nombre: "cataratas",
		categoria: "nacional",
		temporada: "primavera",
		valorPorNoche: 2500,
	},

	{
		id: 4,
		nombre: "mendoza",
		categoria: "nacional",
		temporada: "invierno",
		valorPorNoche: 4500,
	},

	{
		id: 5,
		nombre: "cordoba",
		categoria: "nacional",
		temporada: "verano",
		valorPorNoche: 4000,
	},
];

console.log(destinos);

//EL USUARIO INGRESA UNA OPCION DE DESTINO
// FUNCIÓN QUE PERMITE CALCULAR EL PRECIO POR NOCHE

let destinoIngresado = prompt(`Elije un destino nacional: 
    1: Bariloche
    2: Buenos Aires
    3: Cataratas
    4: Mendoza
    5: Córdoba`);

let cantidadNochesIngresadas = prompt(
	"Ingrese el numero de noches de su estadia"
);

function calcularPrecioPorNoche(destino) {
	let valorPorNoche = 0;
	switch (destino) {
		case "Bariloche":
			valorPorNoche = 3500;
			break;
		case "Buenos Aires":
			valorPorNoche = 2900;
			break;
		case "Cataratas":
			valorPorNoche = 2500;
			break;
		case "Mendoza":
			valorPorNoche = 4500;
			break;
		case "Córdoba":
			valorPorNoche = 4000;
			break;
		default:
			valorPorNoche = 0;
			break;
	}
	return valorPorNoche;
}

alert(
	"El precio de la estadia es: " +
		calcularPrecioEstadia(destinoIngresado, cantidadNochesIngresadas)
);

function calcularPrecioEstadia(destino, cantidadNoches) {
	let precioDeEstadia = cantidadNoches * calcularPrecioPorNoche(destino);
	return precioDeEstadia;
}


// DOM 

let titulo =  document.getElementsByClassName ("card-title")
console.log (card-title.innerText)

titulo.innerText = "DESTINOS NACIONALES"
console.log( titulo.innerText); 
