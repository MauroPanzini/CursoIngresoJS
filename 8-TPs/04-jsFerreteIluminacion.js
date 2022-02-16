/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lamparas = 35;
    var cantLamparas = parseInt(txtIdCantidad.value);
    var precio = lamparas*cantLamparas;

    if(cantLamparas > 5){
        precio -= Desc(precio, 50);
    }
    else if(cantLamparas == 5){
        if(Marca.value == "ArgentinaLuz"){
            precio -= Desc(precio, 40);
        }
        else {
            pprecio -= Desc(precio, 30);
        }
    }
    else if(cantLamparas == 4){
        if(Marca.value == "ArgentinaLuz" || Marca.value == "FelipeLamparas"){
            precio -= Desc(precio, 25);
        }
        else {
            precio -= Desc(precio, 20);
        }
    }
    else if(cantLamparas == 3){
        if(Marca.value == "ArgentinaLuz"){
            precio -= Desc(precio, 15);
        }
        else if(Marca.value== "FelipeLamparas"){
            precio -= Desc(precio, 10);
        }
        else {
            precio -= Desc(precio, 5);
        }
    }
    if(precio>120){
        alert("IIBB Usted pago " + Desc(precio, 10));
        precio += Desc(precio, 10);
    }
    
    txtIdprecioDescuento.value = precio;
}   

function Desc(precio, porcentaje)
{
    return precio*porcentaje/100;
}
