function pintaCuadrado(a){
	var cadena0 = "";
	var cadena1 = " -";
    for(var i=0;i<a;i++){
		cadena0=cadena0+cadena1;
	}
	cadena2="";
	cadena3="| ";
    for(var i=1;i<a;i++){
		cadena2=cadena2+"  ";
	}
	cadena3=cadena3+cadena2+"|";
	print(cadena0);
    for(var i=0;i<a;i++){
		print(cadena3);
	}
	print(cadena0);
}
