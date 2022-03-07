/*
Ejercicio 3:
una agencia de viajes nos contacta para realizar el siguiente programa:
tomar pedidos hasta que el usuario quiera. Nombre, cantidad de días (validar que nos sea negativo ni 0),
precio por día (validar entre 1000 y 3000), lugar al que viajan (validar Córdoba, Mendoza, Entre ríos).

a) de las personas que viajan a Mendoza mostrar el promedio del importe total que se recaudó.
b) el importe total que recaudo Córdoba.
c) mostrar cuantas personas superaron los 15 días y fueron a entre ríos.

*/

function mostrar()
{
	var respuesta = 's';
	var nombre;
	var dias;
	var precio;
	var destino;

	var promedioMendoza = 0;
	var contadorMendoza = 0;
	var acumuladorMendoza = 0;

	var importeTotalCordoba = 0;

	var masDeQuincena = 0;

	while(respuesta == 's'){
		nombre = prompt("Ingrese el nombre: ");
		dias = parseInt(prompt("Ingrese la cantidad de días: "));
		while(isNaN(dias) == true || dias < 1){
			dias = parseInt(prompt("Error. Ingrese la cantidad de días: "));
		}
		precio = parseInt(prompt("Ingrese el precio x día: "));
		while(isNaN(precio) == true || precio < 1000 && precio > 3000){
			precio = parseInt(prompt("Error. Ingrese el precio x día: "));
		}
		destino = prompt("Ingrese el destino (Cordoba, Mendoza, Entre rios): ").toLowerCase();
		while(destino != "cordoba" && destino != "mendoza" && destino != "entre rios"){
			destino = prompt("Error. Ingrese el destino (Cordoba, Mendoza, Entre rios): ").toLowerCase();
		}
		switch(destino){
			case "mendoza":
				contadorMendoza++;
				acumuladorMendoza += precio * dias;
				break;
			case "cordoba":
				importeTotalCordoba += precio * dias;
				break;
			case "entre rios":
				if(dias > 15){
					masDeQuincena++;
				}
				break;		
		}
		respuesta = prompt("Desea ingresar otra venta? s/n").toLowerCase();
	}
	if(contadorMendoza > 0){
		promedioMendoza = acumuladorMendoza / contadorMendoza;
	}
	document.write("A- " + promedioMendoza + "<br>");
	document.write("B- " + importeTotalCordoba + "<br>");
	document.write("C- " + masDeQuincena);
}
