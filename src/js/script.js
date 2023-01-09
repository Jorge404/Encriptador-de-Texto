var textAreaMensaje = document.querySelector("#texto");
var textAreaResultado = document.querySelector("#mensajes-encriptados");
var imagen = document.querySelector("#img-sin-mensajes");
var leyenda = document.querySelector("#leyenda1");

const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#boton-copiar");
//  Funcion para encriptar mensaje 
function mensaje_a_Encriptar(){
    var mensaje = textAreaMensaje.value; //Tomamos el mensaje del text area y lo almacenamos en la variable mensaje
    var mensajeEncriptado = mensaje.
    replaceAll("e","enter").
    replaceAll("i","imes").
    replaceAll("o","ober").
    replaceAll("a","ai").
    replaceAll("u","ufat");
     // Almacenamos el mensaje ya encriptado en la variable mensajeEncriptado, utilizamos replaceAll para remplazar las vocales por un texto

    textAreaResultado.value = mensajeEncriptado;
    textAreaMensaje.value = "";  
    imagen.value = document.querySelector("#img-sin-mensajes").style.visibility = "hidden";
    leyenda.value = document.querySelector("#leyenda1").style.visibility = "hidden";

}

function mensaje_a_Desencriptar(){
    var mensajeEncriptado = textAreaMensaje.value; //Tomamos el mensaje del text area y lo almacenamos en la variable mensaje
    var mensaje = mensajeEncriptado.
    replaceAll("enter","e").
    replaceAll("imes","i").
    replaceAll("ober","o").
    replaceAll("ai","a").
    replaceAll("ufat","u");
    // Almacenamos el mensaje ya encriptado en la variable mensajeEncriptado, utilizamos replaceAll para remplazar las vocales por un texto

    textAreaMensaje.value = mensaje; 
    textAreaResultado.value = "";
    imagen.value = document.querySelector("#img-sin-mensajes").style.visibility = "visible";
    leyenda.value = document.querySelector("#leyenda1").style.visibility = "visible";
}
function copiar(){
    //Funcion para copiar el mensaje encriptado
    var mensajeEncriptado = textAreaResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado); //Metodo para copiar mensaje
    textAreaMensaje.focus();
}


botonEncriptar.onclick = mensaje_a_Encriptar;
botonDesencriptar.onclick = mensaje_a_Desencriptar
botonCopiar.onclick = copiar;