function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch(destinoIngresado){
		case "Cataratas":
		case "Mar del plata":
			alert("En este destino hace calor");
			break;	
		case "Ushuaia":
		case "Bariloche":
			alert("En este destino hace frio");
			break;	
	}

}//FIN DE LA FUNCIÓN