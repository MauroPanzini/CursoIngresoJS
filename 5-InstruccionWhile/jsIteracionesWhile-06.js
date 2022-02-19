function mostrar()
{
	var contador = 5;
	var acumulador = 0;
	var numeroIngresado;
	
	while(contador>0){
		numeroIngresado = parseInt(prompt("Ingrese 5 número/s, faltan " + contador + " números: "));
		acumulador += numeroIngresado;
		contador--;
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN