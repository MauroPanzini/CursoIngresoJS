function mostrar()
{
	var edad = txtIdEdad.value;

	if(edad >= 18){
		alert("La persona es mayor de edad");
	}
	if(edad>= 13 && edad <= 17){
		alert("La persona es adolescente");
	}
	if(edad<13){
		alert("La persona es un niño");
	}
}