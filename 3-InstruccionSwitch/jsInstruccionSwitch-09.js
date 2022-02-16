function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioBase = 15000;


	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					precioBase += precioBase*20/100;
					break;
				case "Cataratas":
				case "Cordoba":
					precioBase -= precioBase*10/100;
					break;
				case "Mar del plata":
					precioBase -= precioBase*20/100;
					break;	
			}
			break;
		case "Verano":
			switch(destinoIngresado){
				case "Bariloche":
					precioBase -= precioBase*20/100;
					break;
				case "Cataratas":
				case "Cordoba":
					precioBase += precioBase*10/100;
					break;
				case "Mar del plata":
					precioBase += precioBase*20/100;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado){
				case "Bariloche":
					precioBase += precioBase*10/100;
					break;
				case "Cordoba":
					precioBase:
					break;
				case "Cataratas":
					precioBase += precioBase*10/100;
					break;
				case "Mar del plata":
					precioBase += precioBase*10/100;
					break;
			}
			break;
	}
	alert("El precio total es: " + precioBase);

}//FIN DE LA FUNCIÓN