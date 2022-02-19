/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada != "utn750"){
		claveIngresada = prompt("Error al ingresar, ingrese el número clave correcto.");

	}
	alert("Bravo master pusiste la clave ;)");
}
