function mostrar()
{
	var edad;
	edad=parseInt(document.getElementById('edad').value);

	if(!(edad<18 && edad>12))
	{
		alert("No eres adolescente");
	}

	/*if(edad>18 || edad<12)
	{
		alert("No eres adolescente");
	}*/
}//FIN DE LA FUNCIÓN