let menuVisibile = false;

//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if(menuVisibile){
        document.getElementById("nav").classList = "";
        menuVisibile = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisibile = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono la opcion
    document.getElementById("nav").classList = "";
    menuVisibile = false;
}