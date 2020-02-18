function mostrar()
{
//tomo la edad  
var mes;

mes = document.getElementById('mes').value;

    switch(mes)
    {
        case "Febrero":
            console.info("Tiene 28 dias ");
            break;
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Septiembre":
        case "Noviembre":
            console.info("Tiene 30 dias ");
            break;
        default:
            console.info("Tiene 31 dias ");
            break;
    }
}
//FIN DE LA FUNCIÓN