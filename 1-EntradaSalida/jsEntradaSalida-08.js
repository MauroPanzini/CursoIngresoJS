/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno = parseInt(txtIdNumeroDividendo.value);
	var numeroDos = parseInt(txtIdNumeroDivisor.value);
	var resto = numeroUno%numeroDos;
	alert("El resto es "+resto);
}
