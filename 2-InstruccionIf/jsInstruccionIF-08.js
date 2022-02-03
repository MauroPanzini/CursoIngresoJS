function mostrar()
{
	var edad = txtIdEdad.value;
	if(edad>=18 && estadoCivil.value == "Soltero"){
		alert("Es soltero y no es menor");
	}
}