

// FUNCION PARA AGREGAR  UN NUEVO OBJETO (DESTINO) AL ARRAY
class destino {
	constructor(id, nombre, categoria, temporada, valorPorNoche) {
		(this.id = id),
			(this.nombre = nombre),
			(this.categoria = categoria),
			(this.temporada = temporada),
			(this.valorPorNoche = valorPorNoche);
	}
}

function addDestino() {
	const ushu = new destino(6, "ushuaia", "nacional", "invierno", 5500);
	destinos.push(ushu);
}

addDestino(destinos);

//FUNCION PARA BUSCAR  UN DESTINO DENTRO DEL ARRAY

function pedirDestino() {
	const destinoIngresado = prompt("Ingresa el destino que deseas encontrar");

	findDestino(destinoIngresado);

	const destinoFiltrado = prompt(
		"Ingresa la estación  del año que deseas para viajar"
	);
	filterDestino(destinoFiltrado);
}

function findDestino(destino) {
	const find = destinos.find((elemento) => elemento.nombre === destino);
	console.log(`encontrar con find `, find);
}

pedirDestino();

//FUNCION PARA FILTRAR LOS DESTINOS

function filterDestino(destinoFilter) {
	const filter = destinos.filter(
		(elemento) => elemento.nombre !== destinoFilter
	);

	console.log(`filtrar con filter`, filter);
}
