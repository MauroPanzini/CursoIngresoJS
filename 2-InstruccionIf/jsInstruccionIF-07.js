function mostrar()
{
	var edad = txtIdEdad.value;
	if(edad<18 && estadoCivil.value != "Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}
}