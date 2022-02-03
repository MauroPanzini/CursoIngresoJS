/* Mauro Panzini
Ejercicio 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);
	var suma = numeroUno + numeroDos;
	alert("Al sumar "+numeroUno + " a "+ numeroDos + ", nos da como resultado "+ suma);
}

