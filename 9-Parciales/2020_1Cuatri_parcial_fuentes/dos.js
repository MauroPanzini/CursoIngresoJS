function mostrar()
{
  var producto;
  var unidades;
  var precio;
  var bolsasTotales = 0;
  var precioTotal = 0;
  var precioConDescuento = 0;
  var acumuladorCal = 0;
  var acumuladorCemento = 0;
  var acumuladorArena = 0;
  var precioTotalArena = 0;
  var precioTotalCemento = 0;
  var precioTotalCal = 0;
  var respuesta = "si";
  var masCaro;
  var precioCaro;
  var banderaMasCaro = 1;

  while(respuesta == "si"){
    
    producto = prompt("Producto a ingresar (arena, cemento, o cal)").toLowerCase();
    while(producto != "cemento" && producto != "cal" && producto != "arena"){
      producto = prompt("Error. Producto a ingresar: ").toLowerCase();
    }
    precio = parseInt(prompt("Precio a ingresar: "));
    while(isNaN(precio)==true || precio < 0){
      precio = parseInt(prompt("Error. Precio a ingresar: "));
    }
    unidades = parseInt(prompt("Ingrese la cantidad del producto:"));
    while(isNaN(unidades)==true || unidades < 0){
      unidades = parseInt(prompt("Ingrese la cantidad del producto:"));
    }
    switch(producto){
      case "arena":
        acumuladorArena += unidades;
        precioTotalArena += unidades*precio;
        break;
      case "cal":
        acumuladorCal += unidades;
        precioTotalCal += unidades*precio;
        break;
      case "cemento":
        acumuladorCemento += unidades;
        precioTotalCemento += unidades*precio;
        break;
    } 
    if(banderaMasCaro == 1){
      masCaro = producto;
      precioCaro = precio;
      banderaMasCaro = 0;
    }
    else if(precio > precioCaro){
      precioCaro = precio;
      masCaro = producto;
    }
    respuesta = prompt("Desea seguir ingresando productos?").toLowerCase();
  }
  bolsasTotales = acumuladorArena + acumuladorCal + acumuladorCemento;
  precioTotal = precioTotalArena + precioTotalCal +  precioTotalCemento;
  if(bolsasTotales > 30){
    precioConDescuento = precioTotal - precioTotal*25/100;
    document.writeln("El precio con descuento es: " + precioConDescuento);
  }
  else if(bolsasTotales > 10){
    precioConDescuento = precioTotal - precioTotal*10/100;
    document.write("El precio con descuento es: " + precioConDescuento + "<br>");
  }
  document.write("El precio bruto es: " + precioTotal + "<br>");
  document.write("El producto mas caro es: " + masCaro);
}

