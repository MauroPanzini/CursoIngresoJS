function mostrar()
{
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño){
		case "Marzo":
		case "Abril": 
		case "Mayo": 
		case "Junio":
			alert("Falta para el invierno");
			break;		
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío"); 
			break;
		default: 
			alert("Ya pasamos el frío, ahora calor!!!");
			break;
	}

}//FIN DE LA FUNCIÓN