function mostrar()
{
    var planeta = prompt("Ingrese un planeta del sistema solar: ").toLowerCase();
    var mensaje;
    
    switch(planeta){
        case "mercurio":
        case "venus":
            mensaje = "Este planeta es mas cálido";
            break;
        case "tierra":
            mensaje = "Acá vivimos";
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = "Este planeta es mas frío";
            break;
        default:
            mensaje = "Este no es un planeta, o está mal escrito";
            break;        
    }
    alert(mensaje);
}
