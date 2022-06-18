//Añadir Carrusel de imagenes //
var arr_Rojo = ["g1", "g2", "g3"];
var arr_descripcion = ["Rojo", "Plomo", "Blanco"];

//Método para cambiar las imágenes del elemento banner
var n = 0;

function Carrusel() {
    var Rojo = document.getElementById("Rojo");
    Rojo.src = "../img/Sedan/" + arr_Rojo[n] + ".jpg";
    n++;
    if (n >= arr_Rojo.length) n = 0;
    window.setTimeout("Carrusel()", 3000);
}

window.onload=function(){
    Carrusel();
}
