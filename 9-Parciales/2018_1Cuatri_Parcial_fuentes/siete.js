function mostrar()
{
    var nota; 
    var sexo;
    var notasTotales = 0;
    var promedioNotas;
    var banderaNotaBaja = 0;
    var notaMasBaja;
    var sexoPersonaNotaBaja;
    var varonesConSeis = 0;
    var contador = 0; 

    while(contador < 5){
        nota = parseInt(prompt("Ingrese la nota del alumno: "));
        while(isNaN(nota)==true || nota > 10 || nota < 0){
            nota = parseInt(prompt("Ingrese una nota correcta, debe estar entre 0 y 10: "));
        }
        sexo = prompt("Ingrese el sexo del alumno: ").toLowerCase();
        while(sexo != "f" && sexo != "m"){
            sexo = prompt("Ingrese un sexo válido: ").toLowerCase();
        }
        if(banderaNotaBaja == 0){
            notaMasBaja = nota;
            sexoPersonaNotaBaja = sexo;
            banderaNotaBaja = 1;
        }
        else if(notaMasBaja > nota){
            notaMasBaja = nota;
            sexoPersonaNotaBaja = sexo;
        }
        if(sexo == "m" && nota > 5){
            varonesConSeis++;
        }
        notasTotales = nota + notasTotales;
        contador++;
    }
    promedioNotas = notasTotales/5;
    alert("A- El promedio de notas es de: " + promedioNotas);
    alert("B- La nota mas baja fue " + notaMasBaja + ", y el alumno es " + sexoPersonaNotaBaja);
    alert("C- " + varonesConSeis + " varones sacaron 6 o mas");
}

