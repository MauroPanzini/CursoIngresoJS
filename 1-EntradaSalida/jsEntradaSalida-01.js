/* 
Una empresa de venta de cosméticos necesita un programa que permita la carga de productos vendidos,
 junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
•	Vendedor: Juan, María, Lucrecia
•	Tipo producto: Perfume, Shampoo o Maquillaje
•	Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a.	Promedio de ventas por cada vendedor.
b.	Cantidad de perfumes que vendió María
c.	El importe mas barato junto con el vendedor que lo vendió.
d.	El nombre del vendedor con menor comisión.

*/ 


function mostrar()
{
	//variables iniciales
	var vendedor;
	var producto;
	var importe;
	var respuesta = "s";
	//

	var importeDeVentasJuan = 0;
	var importeDeVentasLucrecia = 0;
	var importeDeVentasMaria = 0;

	var ventasJuan = 0;
	var ventasMaria = 0;
	var ventasLucrecia = 0;

	var perfumesMaria = 0;

	var vendedorBarato;
	var importeBarato;
	var banderaBarato = 1;

	var comisionJuan = 0;
	var comisionLucrecia = 0;
	var comisionMaria = 0;

	var promedioJuan;
	var promedioLucrecia;
	var promedioMaria;

	var mensaje;

	while(respuesta == "s"){

		//asignamos valor a las variables  iniclaes y las validamos :D//

		vendedor = prompt("Ingrese el nombre del vendedor: ").toLowerCase(); 
		while(vendedor != "juan" && vendedor != "maria" && vendedor != "lucrecia"){
			vendedor = prompt("Error. Ingrese el nombre del vendedor: ").toLowerCase();
		}
		producto = prompt("Ingrese el producto: ").toLowerCase();
		while(producto != "perfume" && producto != "shampoo" && producto != "maquillaje"){
			producto = prompt("Error. Ingrese el producto: ").toLowerCase();
		}
		importe = parseInt(prompt("Ingrese el importe del producto: "));
		while(isNaN(importe) == true || importe < 1){
			importe = parseInt(prompt("Error. Ingrese el importe del producto: "));
		}

		//acumulamos importes y contamos cantidad de ventas//		
		switch(vendedor){
			case "juan":
				ventasJuan++;
				importeDeVentasJuan = importeDeVentasJuan + importe;
				break;
			case "lucrecia":
				ventasLucrecia++;
				importeDeVentasLucrecia = importeDeVentasLucrecia + importe;
			case "maria":
				ventasMaria++;
				importeDeVentasMaria = importeDeVentasMaria + importe;
				if(producto == "perfume"){
					perfumesMaria++;
				}
				break;
		}
		//cargamos el primer importe mas barato utilizando una bandera//
		if(banderaBarato == 1){
			importeBarato = importe;
			vendedorBarato = vendedor;
			banderaBarato = 0;
		}
		//comparamos el valor para saber cuál es el mas barato//
		else if(importeBarato > importe){
			importeBarato = importe;
			vendedorBarato = vendedor;
		}
		respuesta = prompt("Quiere seguir ingresando? s/n").toLowerCase();
	}
//Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
//Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.

	if(importeDeVentasJuan >= 5000 && importeDeVentasJuan <= 10000){
		comisionJuan = importeDeVentasJuan*15/100;
	}
	else if(importeDeVentasJuan >10000){
		comisionJuan = importeDeVentasJuan*20/100;
	}
	else{
		comisionJuan = importeDeVentasJuan*5/100;
	}
	if(importeDeVentasLucrecia  >= 5000 && importeDeVentasLucrecia <= 10000){
		comisionLucrecia = importeDeVentasLucrecia*15/100;
	}
	else if(importeDeVentasLucrecia > 10000){
		comisionLucrecia = importeDeVentasLucrecia*20/100;
	}
	else{
		comisionLucrecia = importeDeVentasLucrecia*5/100;
	}
	if(importeDeVentasMaria >= 5000 && importeDeVentasMaria <= 10000){
		comisionMaria = importeDeVentasMaria*15/100;
	}
	else if(importeDeVentasMaria > 10000){
		comisionMaria = importeDeVentasMaria*20/100;
	}
	else{
		comisionMaria = importeDeVentasMaria*5/100;
	}

	promedioJuan = importeDeVentasJuan/ventasJuan;
	promedioLucrecia = importeDeVentasLucrecia/ventasLucrecia;
	promedioMaria = importeDeVentasMaria/ventasMaria;


	if(comisionJuan < comisionLucrecia && comisionJuan < comisionMaria){
		mensaje = "Juan es el vendedor con menor comision";
	}
	else if(comisionLucrecia < comisionJuan && comisionLucrecia < comisionMaria){
		mensaje = "Lucrecia es la vendedora con menor comision";
	}
	else{
		mensaje = "Maria es la vendedora con menor comision";
	}

	document.write("El promedio de ventas de cada vendedor fue: " + promedioJuan + promedioLucrecia + promedioMaria + "<br>");
	document.write("Maria vendió: " + perfumesMaria + "<br>");
	document.write("El importe mas barato: " + importeBarato + vendedorBarato + "<br>");
	document.write(mensaje);

}

validacion();

