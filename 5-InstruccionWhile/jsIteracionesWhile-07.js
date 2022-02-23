/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si"){
		numeroIngresado = parseInt(prompt("Ingrese número/s. Ya ingresaste " + contador + " números: "));
		acumulador += numeroIngresado;
		contador++;
		respuesta = prompt("¿Desea seguir ingresando números?").toLowerCase();
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN