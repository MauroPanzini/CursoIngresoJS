function mostrar()
{
    var numeroUno = parseInt(prompt("Ingrese el primer número: "));
    var numeroDos = parseInt(prompt("Ingrese el segundo número: "));
    var resta = numeroUno - numeroDos;
    var suma = numeroUno + numeroDos; 

    if(numeroUno == numeroDos){
        alert("Los numeros son " + numeroUno + " y " + numeroDos);
    } 
    else if(numeroUno > numeroDos){
        alert("La resta da: " + resta);
    }
    else{
        if(suma > 10){
            alert("la suma es " + suma + " y supero el 10");
        }
        else {
            alert("La suma es " + suma);
        }
    }
}
