function mostrar()
{
//tomo la edad  
var hora;

hora = document.getElementById('hora').value;
hora= parseInt(hora);

	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			console.info("Es de mañana");
			break;
	}
	
	



}//FIN DE LA FUNCIÓN