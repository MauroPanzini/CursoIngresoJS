function mostrar()
{
    var precio = parseInt(prompt("Ingrese precio: "));
    var descuento = parseInt(prompt("Ingrese el % a descontar: "));
    var precioConDescuento = precio - precio*descuento/100;
    elPrecioFinal.value = precioConDescuento;
}
