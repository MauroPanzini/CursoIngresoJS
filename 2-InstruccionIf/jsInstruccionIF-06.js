function mostrar()
{
	var edad = prompt();
	if(edad > 17 && edad < 71){
		txtIdEdad.value = "La persona es mayor de edad";
	}
	else if(edad > 12 && edad < 18){
		txtIdEdad.value = "La persona es adolescente";
	}
	else if(edad < 13 && edad > 3){
		txtIdEdad.value = "La persona es un niño";
	}
	else if(edad < 4 && edad > -1){
		txtIdEdad.value = "La persona es un bebé";
	}
	else if(edad > 70){
		txtIdEdad.value = "La persona es anciana";
	}

}