/*ARTICULO DESPLEGABLE*/

let desplegable = document.getElementsByClassName("desplegable");

for (let i = 0; i < desplegable.length; i++) {
    desplegable[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let articulo = this.nextElementSibling;
        if ( articulo.style.display === "block"){
            articulo.style.display = "none";
        } else {
            articulo.style.display = "block";
        }
    });
}

/* MENU MODAL */

let book = document.getElementById("myBooks");
let boton = document.getElementById("botonModal");
let span = document.getElementsByClassName("cerrar")[0];

boton.onclick = function() {
book.style.display = "block";
}

span.onclick = function() {
book.style.display = "none";
}

window.onclick = function(event) {
if (event.target == book) {
    book.style.display = "none";
}
}
