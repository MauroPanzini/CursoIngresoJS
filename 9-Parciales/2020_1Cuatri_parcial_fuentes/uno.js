
/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var producto;
	var precio;
	var unidades;
	var marca;
	var fabricante;

	var acumuladorJabon = 0;
	var acumuladorBarbijo = 0;
	var acumuladorAlcohol = 0;

	var acumuladorPrecioBarbijo = 0;
	var acumuladorPrecioJabon = 0;
	var acumuladorPrecioAlcohol = 0;

	var alcoholBarato;
	var unidadesAlcohol;
	var fabricanteAlcohol;
	var banderaAlcohol = "true";

	var maxUnidades;
	var promedioCompra;

	var contador = 0;
	
	while(contador<5){
		producto = prompt("Producto a ingresar (barbijo, alcohol, o jabon)").toLowerCase();
	while(producto != "barbijo" && producto != "jabon" && producto != "alcohol"){
		producto = prompt("Error. Producto a ingresar: ").toLowerCase();
	}
	precio = parseInt(prompt("Precio a ingresar (debe estar entre 100 y 300) "));
	while(isNaN(precio)==true || precio < 100 || precio > 300){
		precio = parseInt(prompt("Error. Precio a ingresar (debe estar entre 100 y 300) "));
	}
	unidades = parseInt(prompt("Ingrese la cantidad del producto (1 a 1000)"));
	while(isNaN(unidades)==true || unidades > 1000 || unidades < 1){
		unidades = parseInt(prompt("Ingrese la cantidad del producto (1 a 1000)"));
	}
	marca = prompt("Introduzca la marca del producto: ");
	fabricante = prompt("Introduzca el fabricante del producto: ");
		contador++;
		switch(producto){
			case "jabon":
				acumuladorJabon += unidades;
				acumuladorPrecioJabon += precio * unidades;
				break;
			case "barbijo":
				acumuladorBarbijo += unidades;
				acumuladorPrecioBarbijo += precio * unidades;
				break;
			case "alcohol":
				acumuladorAlcohol += unidades;
				acumuladorPrecioAlcohol += precio * unidades;
				if(banderaAlcohol == "true"){
					alcoholBarato = precio;
					unidadesAlcohol = unidades;
					fabricanteAlcohol = fabricante;
					banderaAlcohol = "false";
				}
				else if(precio < alcoholBarato){
					alcoholBarato = precio;
					unidadesAlcohol = unidades;
					fabricanteAlcohol = fabricante;
				}
				break;	
		}		
		if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
			maxUnidades = acumuladorAlcohol;
			promedioCompra = acumuladorPrecioAlcohol/maxUnidades; 
		}
		else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon){
			maxUnidades = acumuladorBarbijo;
			promedioCompra = acumuladorPrecioBarbijo/maxUnidades;
		}
		else{
			maxUnidades = acumuladorJabon;
			promedioCompra = acumuladorJabon/maxUnidades;
		}
		
	}
	document.writeln("El alcohol mas barato tiene " + unidadesAlcohol + " y es del fabricante " + fabricanteAlcohol);
	document.writeln("El tipo con mas unidades tiene" +maxUnidades + " y el promedio de compra es " +promedioCompra );
	document.writeln("Hay " + acumuladorJabon + " unidades de jabon");
}
