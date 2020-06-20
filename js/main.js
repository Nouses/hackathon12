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


