function mostrar()
{
//tomo la edad  
var edad;

edad=parseInt(document.getElementById("edad").value);

if(edad>=18){
    alert("Usted es Mayor de edad");
} else {
    alert("Usted es menor de edad");
}

}//FIN DE LA FUNCIÓN