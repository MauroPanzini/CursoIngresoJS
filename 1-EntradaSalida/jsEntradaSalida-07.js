/* Mauro Panzini
Ejercicio 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);
	var suma = numeroUno + numeroDos;
	alert("Al sumar "+numeroUno + " a "+ numeroDos + ", nos da como resultado "+ suma);
}

function restar()
{
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);
	var resta = numeroUno - numeroDos;
	alert("Al restar "+numeroUno + " a "+ numeroDos + ", nos da como resultado "+ resta);
}

function multiplicar()
{ 
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);
	var multiplicacion = numeroDos * numeroUno;
	alert("Al multiplicar "+numeroUno + " por "+ numeroDos + ", nos da como resultado "+ multiplicacion);
}

function dividir()
{
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);
	var dividir = numeroUno/numeroDos;
	alert("Al dividir "+numeroUno + " por "+ numeroDos + ", nos da como resultado "+ dividir);
	
}

