/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseInt(txtIdLargo.value);
    var ancho = parseInt(txtIdAncho.value);
    var perimetro = largo *2+ ancho*2;
    var alambreTotal = perimetro*3;
    alert("El total de alambre necesario es de: " + alambreTotal + " metros.")

}
function Circulo () 
{
    var radio = parseInt(txtIdRadio.value);
    var perimetro = Math.PI*2*radio;
    var alambreTotal = perimetro*3;
    alert("El total de alambre necesario es de: " + alambreTotal + " metros.")
}
function Materiales () 
{
    var largo = parseInt(txtIdLargo.value);
    var ancho = parseInt(txtIdAncho.value);
    var superficie = largo*ancho;
    var cemento = superficie * 2;
    var cal = superficie * 3;
    alert("Para el contrapiso se necesitan "+ cemento + " bolsas de cemento y "+ cal + " bolsas de cal");
	
}