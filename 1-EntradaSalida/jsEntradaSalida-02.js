/*
2. Se necesita llevar el registro de un vacunatorio. 
Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre 
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)

Informar:
a-	Promedio de edad de los que se vacunaron con la china.
b-	Nombre y vacuna del masculino más joven.
c-	De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d-	Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e-	Vacuna más inoculada*/

function mostrar()
{
	var nombre;
	var edad;
	var vacuna;
	var dosis;
	var genero;
	var respuesta = "si";
	
	var mensaje;

	var promedioEdadChina;
	var contadorChina = 0;
	var edadChina = 0;

	var contadorAmericana = 0;
	var contadorMenorEdad = 0;
	var porcentajeMenores;

	var contadorRusa = 0;

	var banderaMasJoven = 0;
	var nombreMasJoven;
	var vacunaMasJoven;
	var edadMasJoven;

	var totalVacunados = 0;
	var totalPrimeraDosis = 0;
	var porcentajePrimeraDosis;

	while(respuesta == "si"){

		nombre = prompt("Ingrese el nombre de la persona: ");
		edad = parseInt(prompt("Ingrese la edad de la persona: "));
		while(isNaN(edad)==true || edad < 12){
			edad = parseInt(prompt("Error. Ingrese una edad valida mayor a 11: "));
		}
		if(edad > 11 && edad < 18){
			vacuna = "americana";
			alert("A las personas que estén entre los 12 y 17 años inclusive, solamente se les aplica vacuna americana");
		}
		else{
			vacuna = prompt("Ingrese el origen de la vacuna: ").toLowerCase();
			while(vacuna != "rusa" && vacuna != "china" && vacuna != "americana"){
				vacuna = prompt("Error. Ingrese el origen de la vacuna correctamente: ").toLowerCase();
			}
		}
		dosis = prompt("Ingrese qué dosis se está aplicando:'p'(primera) y 's'(segunda)").toLowerCase();
		while(dosis != "p" && dosis!= "s"){	
			dosis = prompt("Error. Las dosis se ingresan con 'p'(primera) y 's'(segunda)").toLowerCase();
		}
		genero = prompt("Ingrese el genero de la persona ('m' o 'f'): ").toLowerCase();
		while(genero != "m" && genero!= "f"){	
			dosis = prompt("Error. Ingrese un genero válido").toLowerCase();
		}
		totalVacunados++;
		if(dosis == "p"){
			totalPrimeraDosis++;
		}
		switch(vacuna){
			case "china":
				edadChina = edadChina + edad;
				contadorChina++;
				break;
			case "americana":
				contadorAmericana++;
				if(edad < 19){
					contadorMenorEdad++;
				}
				break;
			case "rusa":
				contadorRusa++;
				break;
		}
		if(banderaMasJoven == 0 && genero == "m"){
			vacunaMasJoven = vacuna;
			nombreMasJoven = nombre;
			edadMasJoven = edad;
			banderaMasJoven = 1;
		}	
		else if(edadMasJoven > edad && genero == "m") {
			edadMasJoven = edad;
			vacunaMasJoven = vacuna;
			nombreMasJoven = nombre;
		}

	}

	promedioEdadChina = edadChina/contadorChina;
	porcentajeMenores = contadorMenorEdad*100/contadorAmericana;
	porcentajePrimeraDosis = totalPrimeraDosis*100/totalVacunados;

	if(contadorAmericana > contadorChina && contadorAmericana > contadorRusa){
		mensaje = "La vacuna americana fue la mas inoculada";
	}
	else if(contadorChina > contadorAmericana && contadorChina > contadorRusa){
		mensaje = "La vacuna china fue la mas inoculada";
	}	
	else{
		mensaje = "La vacuna rusa fue la mas inoculada";
	}

	document.write(promedioEdadChina + "<br>");
	document.write(nombreMasJoven + " " + vacunaMasJoven + "<br>");
	document.write(porcentajeMenores + "<br>");
	document.write(porcentajePrimeraDosis + "<br>");
	document.write(mensaje);

}
