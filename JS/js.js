function conversor(elEvento){
    elEvento.preventDefault();

    
    var libras = document.querySelector("#inputLibras").value;
    var resultado = document.querySelector("#resultado");
    var kilo = 0.45;

    /*Programacion*/
    var respuesta = (libras*kilo)

    resultado.innerHTML = "Al convertirlo en kilogramos es :" + respuesta;
}
    var boton = document.querySelector("#inputFormulario");
    boton.addEventListener("submit", conversor);