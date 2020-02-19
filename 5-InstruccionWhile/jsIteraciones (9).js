function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var respuesta='si';
	var numero;


	while(respuesta!='no')
	{
		contador++ // se inicia contador para que este valga 1, de lo contrario vale 0
		numero=parseInt(prompt("Ingrese un numero ")); // se pide el numero

		if(contador==1) // si el contador vale 1, se establece el valor base de max y min.
		{
			maximo=numero;
			minimo=numero;
		} else //en el caso de ya estar establecido, se continua con las acumulaciones corresp.
			{
				if(numero>maximo)
				{
					maximo=numero;
				}// no se utiliza else ya que el hecho de que no sea el maximo no garantiza que sea el minimo.
				if(numero<minimo)
				{
					minimo=numero;
				}
			}	
		respuesta=prompt("Desea volver a ingresar un numero? ");
	}

document.getElementById('minimo').value=minimo;
document.getElementById('maximo').value=maximo;
}//FIN DE LA FUNCIÓN