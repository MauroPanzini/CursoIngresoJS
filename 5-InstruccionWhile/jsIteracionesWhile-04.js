/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	while(numeroIngresado > 9 || numeroIngresado < 0){
		numeroIngresado = prompt("ingrese un número CORRECTO entre 0 y 10.");
	}
	txtIdNumero.value = numeroIngresado;

}//FIN DE LA FUNCIÓN