<script type="text/javascript">
function valorAleatorio( ){
var a=document.getElementById('op1').value;
var b=document.getElementById('op2').value;
var resultado=valorAletario(a);
document.getElementById('result').innerHTML=parseInt(resultado);
}
</script>
<script type="text/javascript">
function valorAleatorio(numDigitos){
	var temp1;
	var temp2;
	var temp3;
	temp1=math.pow(numDigitos);
	temp2=math.random();
	temp3=temp2*temp1;
return math.floor(temp3);
}
</script>
<body>
<input id="op1" type="text">
<input id="op2" type="text">
<p id="result">Resultado</p>
<button type="button" onclick="ValorAleatorio"> valor aleatorio</button>
</body>
</html>