/* Mauro Panzini
Ejercicio 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado = prompt();
	document.getElementById('txtIdNombre').value = nombreIngresado; 
}

