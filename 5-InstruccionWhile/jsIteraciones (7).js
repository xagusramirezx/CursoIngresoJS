function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
{
	numero=prompt("ingrese un numero");
	numero=parseInt(numero);
	acumulador=acumulador+numero;
	contador++;
	respuesta=prompt("Desea continuar? ");

	console.info("este es acumulador"+ acumulador);
	console.info("este es contador"+ contador);
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN