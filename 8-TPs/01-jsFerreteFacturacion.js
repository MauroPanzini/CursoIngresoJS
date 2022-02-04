/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno = parseInt(txtIdPrecioUno.value);
    var precioDos = parseInt(txtIdPrecioDos.value);
    var precioTres = parseInt(txtIdPrecioTres.value);
    var suma = precioUno + precioDos + precioTres;

    alert("La suma da un total de: " + suma);
}
function Promedio () 
{
	var precioUno = parseInt(txtIdPrecioUno.value);
    var precioDos = parseInt(txtIdPrecioDos.value);
    var precioTres = parseInt(txtIdPrecioTres.value);
    var suma = precioUno + precioDos + precioTres;
    var promedio = suma/3;
    alert("El promedio es: " + promedio);
}
function PrecioFinal () 
{
    var precioUno = parseInt(txtIdPrecioUno.value);
    var precioDos = parseInt(txtIdPrecioDos.value);
    var precioTres = parseInt(txtIdPrecioTres.value);
    var suma = precioUno + precioDos + precioTres;
    var masIva = suma*21/100 + suma;
    alert("El precio final es de: "+ masIva);	
}