/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var porcentaje = prompt();
	var importe = parseInt(txtIdImporte.value);
	var descuento = importe - importe*porcentaje/100;
	txtIdResultado.value = descuento;	
	alert("El importe es " + importe + ", el descuento es de un " + porcentaje + "%, y el importe con el descuento es " + descuento);
}
