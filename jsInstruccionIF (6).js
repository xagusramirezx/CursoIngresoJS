function mostrar()
{
//tomo la edad  

var edad;

edad=parseInt(document.getElementById("edad").value);

if(edad>=18){
    alert("Usted es Mayor");
} else if(edad>=13 && edad<=17){
    alert("Usted es adolescente");
}else{
    alert("usted es menor");
}



}//FIN DE LA FUNCIÓN