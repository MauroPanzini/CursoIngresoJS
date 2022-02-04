/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit = parseInt(txtIdTemperatura.value);
    var conversion = (fahrenheit - 32) *5/9;
    alert("La temperatura es de "+ conversion + "ºC");
}

function CentigradosFahrenheit () 
{
    var centrigrados = parseInt(txtIdTemperatura.value);
    var conversion = (centrigrados * 9/5)+32;
    alert("La temperatura es de "+ conversion + "ºF");
}
