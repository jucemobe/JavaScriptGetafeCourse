function muestraNumerosDescententeACeroConGuiones(a){
    for(var i=a;i>=0;i--){
		var cadena = "";
		for(var j=0;j<i;j++){
			cadena = cadena + "-";
		}
		var temp = i.toString();
		temp = temp + " " + cadena;
		print(temp);
	}
}
