function saludoBoolArg(){
var resultado=misaludoBoolArg(a,b);
print(resultado);
}
function misaludoBoolArg(a,b){
	if (a==true){
		var sal = "HOLA, Buenas tardes";
	}
	else{
		var sal = "Adios, hasta pronto! ";
	}
//alert(document.getElementById('demo').innerHTML = sal);
print(sal.concat(" ",b));
return sal.concat(" ",b);
}
