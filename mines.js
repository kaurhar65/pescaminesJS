/**
 * Al despertar un zero(pescamines) s'ha d'obrir totes les caselles del voltanti 
 * si hi ha un altre adjacent a zero repetir el procñes amb la que està a zero del 
 * costat. Al acabar el joc s'ha de desactivar el click de les casilles restants. 
 */

function iniciarPartida(){
    alert("Hello")
    let filas = prompt("Introduce el número de las filas(10-30): ");
    let columnas = prompt("Introduce el número de las columnas(10-30): ");

    if(filas < 10){
        filas = 10;
    }else if(columnas < 10){
        columnas = 10;
    }else if(filas > 30){
        filas = 30;
    }else if(columnas > 30){
        columnas = 30;
    }else{
        alert("MUY BIEN!, Sabes leer")
    }
    crearTaulell(filas, columnas);
    setmines(filas, columnas);
}

function crearTaulell(filas, columnas){
    tabla = "<table>"
    taula = document.getElementById("taulell")


    for (let i=1;i<=filas;i++){
        tabla += "<tr>";
        for (let j=1;j<=columnas;j++){
            tabla+= `<td data-mina="false" style="width:20px; height:20px"><img src="imatges/fons20px.jpg" onclick="obreCasella();"></td>`;
        }
        tabla += "</tr>";
    } 
    tabla += "</table>"
    taula.innerHTML = tabla;

}

function setmines(filas, columnas){
    let tablaTotal = filas * columnas;
    let porcentajeFilas = (17 * filas) / 100; 
    let porcentajeColumnas = (17 * columnas) / 100;
    
    console.log(porcentajeFilas + " filas");
    console.log(porcentajeColumnas + " columnas");

    tabla = "<table>"
    taula = document.getElementById("taulell")
    for (let i=1;i<=porcentajeFilas;i++){
        tabla += "<tr>";
        for (let j=1;j<=porcentajeColumnas;j++){
            tabla+= `<td data-mina="true" style="width:20px; height:20px"><img src="imatges/mina20px.jpg" onclick="obreCasella();"></td>`;
        }
        tabla += "</tr>";
    } 
}

function calculaAdjacents(){

}

function esMina(x,y){
    //de la posición especifica retorna si hay una mina o no

}
function setMinesAdjacents(x,y,nMinesAdjacents){

}

function obreCasella(){
    alert("Harpreet")
}

function acabado(){
    alert("Hay una mina, has perdido!")
}

function ganado(){
    alert("Ganado!")
}


