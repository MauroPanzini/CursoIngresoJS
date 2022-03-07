/* Llegan vuelos con vacunas de distintos lugares del mundo
    Mientras el usuario quiera se debe registrar de cada vuelo:
    -Origen (“Asia”, “Europa”, “América”)
    -Cantidad de vacunas (entre 500000 y 2500000)
    -Costo del vuelo (entre 1 millón y 5 millones de pesos)
   Informar:
    a- El origen que envió menor cantidad de vacunas
    b- El total sin descuentos a pagar por los gastos de los viajes
    c- Si en total se recibieron mas de 10 millones de vacunas se hace
    un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
    descuento es del 15% con menor cantidad no hay descuento.
    Informar si hubo descuento de cuanto fue y el importe final con
    Descuento.
*/
function mostrar()
{
	var origen;
	var cantidad;
	var costoDelVuelo;
	var respuesta = 's';

	var acumuladorAsia = 0;
	var acumuladorEuropa = 0;
	var acumuladorAmerica = 0;

	var costoTotalVuelo;
	var descuento = 0;
	var totalVacunas;
	var totalConDescuento;

	var costoVueloAsia = 0;
	var costoVueloEuropa = 0;
	var costoVueloAmerica = 0;

	var mensaje;


	while(respuesta =='s'){
		origen = prompt("Ingrese el origen de la vacuna: ").toLowerCase();
		while(origen!= "asia" && origen!= "europa" && origen!= "america"){
			origen= prompt("Error. Ingrese el origen de la vacuna correctamente: ").toLowerCase();
		}
		cantidad = parseInt(prompt("Ingrese la cantidad de vacunas: "));
		while(isNaN(cantidad) == true || cantidad < 500000 || cantidad > 2500000){
			cantidad = parseInt(prompt("Error. Ingrese la cantidad de vacunas: "));
		}
		costoDelVuelo = parseInt(prompt("Ingrese el costo del vuelo: "));
		while(isNaN(costoDelVuelo) == true || costoDelVuelo < 1000000 || costoDelVuelo > 5000000){
			costoDelVuelo = parseInt(prompt("Error. Ingrese correctamente el costo del vuelo: "));
		}
		
		switch(origen){
			case "asia":
				acumuladorAsia += cantidad;
				costoVueloAsia += costoDelVuelo; 
				break;
			case "europa":
				acumuladorEuropa += cantidad;
				costoVueloEuropa += costoDelVuelo;
				break;
			case "america":
				acumuladorAmerica += cantidad;
				costoVueloAmerica += costoDelVuelo;
				break;
		}
		respuesta = prompt("Quiere seguir ingresando? s/n").toLowerCase();
	}
	if(acumuladorAmerica < acumuladorAsia && acumuladorAmerica < acumuladorEuropa){
		mensaje = "America envió menos vacunas";
	}
	else if(acumuladorAsia < acumuladorAmerica && acumuladorAsia < acumuladorEuropa){
		mensaje = "Asia envió menos vacunas";
	}
	else{
		mensaje = "Europa envió menos vacunas";
	}
	totalVacunas = acumuladorAmerica + acumuladorAsia + acumuladorEuropa;
	costoTotalVuelo = costoVueloAmerica + costoVueloAsia + costoVueloEuropa;
	if( totalVacunas > 10000000){
		descuento = costoTotalVuelo*25/100;
	}
	else if(totalVacunas > 4999999 && totalVacunas < 10000001){
		descuento = costoTotalVuelo*15/100;
	}
	totalConDescuento = costoTotalVuelo - descuento;

	document.write(mensaje + "<br>");
	document.write("El costo total de todos los viajes es de: " + costoTotalVuelo + "<br>");
	document.write("El costo total de Asia es de: " + costoVueloAsia + "<br>");
	document.write("El costo total de Europa es de: " + costoVueloEuropa + "<br>");
	document.write("El costo total de America es de: " + costoVueloAmerica + "<br>");

	document.write("La cantidad total de vacunas es de: " + totalVacunas + ". Por lo tanto el descuento es de: " + descuento + "<br>");
	document.write("El importe con el descuento aplicado es de: " + totalConDescuento);
}


//terminé todo el parcial en 26 minutos con 13 segundos;


