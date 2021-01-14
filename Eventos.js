function mi_pagina(){
    window.open("https://www.youtube.com/channel/UCgddnMSZjvqzqj7fIKsLQCA?view_as=subscriber")
}

function cambio(evento){
    alert("La region seleccionada es "+evento.target.value)
}

function soltar(){
 let userIn = document.getElementById("name").value;
 document.getElementById("name").value=userIn.toUpperCase();
 //userIn=userIn.toUpperCase(); //incorrecto
    
}

function presionar(){
    document.getElementById("Descripcion").style.backgroundColor="blue";
}

function soltarc(){
    document.getElementById("Descripcion").style.backgroundColor="grey";
    
}