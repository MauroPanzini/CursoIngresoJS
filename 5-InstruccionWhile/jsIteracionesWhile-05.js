/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado = prompt("ingrese f ó m: ").toLowerCase();
	while(sexoIngresado != "f" && sexoIngresado != "m"){
		sexoIngresado = prompt("Error. Ingrese f ó m: ");
	}
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN