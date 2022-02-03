function mostrar()
{
	var nota = Math.floor(Math.random() *10)+1;
	if(nota >= 9){
		alert("La nota es: "+ nota +", EXCELENTE");
	}
	if(nota >= 4 && nota<9){
		alert("La nota es: "+ nota + ", APROBÓ");
	}
	if(nota<4){
		alert("La nota es: "+ nota + ". Vamos, la próxima se puede");
	}
}