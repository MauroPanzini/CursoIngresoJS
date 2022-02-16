function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch(destinoIngresado){
		case "Bariloche":
			alert("El destino está en el oeste");
			break;
		case "Cataratas":
			alert("El destino está en el norte");
			break;
		case "Mar del plata":
			alert("El destino está en el este");
			break;	
		case "Ushuaia":
			alert("El destino está en el sur");
			break;	
	}

}//FIN DE LA FUNCIÓN