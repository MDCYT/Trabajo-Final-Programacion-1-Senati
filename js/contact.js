
var arr_abc = ["s1", "s2", "s3"];
var arr_desc = ["Surquillo", "San Borja", "La Molina"];

var n = 0;

function Carrusel(){
    var lugares = document.getElementById("lugares");
    lugares.src = "../img/sd/" + arr_abc[n] + ".jpg";
    n++;
    if(n >= arr_abc.length) n = 0;
    window.setTimeout("Carrusel()", 3000);
}

window.onload=function(){
    Carrusel();

}