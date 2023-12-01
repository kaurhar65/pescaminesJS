let filas;
let columnas;

function iniciarPartida(){
    filas = parseInt(prompt("Introduce el número de las filas(10-30): "));
    columnas = parseInt(prompt("Introduce el número de las columnas(10-30): "));

    if(filas < 10){
        filas = 10;
       
    }else if(columnas < 10){
        columnas = 10;

    }else if(filas > 30){
        filas = 30;
        
    }else if(columnas > 30){
        columnas = 30;
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
            tabla+= `<td id=${i+"-"+j} data-mina="false"><img src="imatges/fons20px.jpg" 
            onclick="obreCasella(${i},${j})"></td>`;
        }
        tabla += "</tr>";
    } 
    tabla += "</table>"
    taula.innerHTML = tabla;

}

function setmines(filas, columnas){
    //cálculo del número máximo de las minas, que es un 17%
    let tablaTotal = filas * columnas;
    let numMaxMinas = (17 *  tablaTotal) / 100; 

    //Con un math.Random se elige una celda ramdom.
    for(let i=0; i< numMaxMinas; i++){
        let columnaRdm = Math.floor(Math.random() * (columnas - 1 + 1)) +1;
        let filaRdm = Math.floor(Math.random() * (filas - 1 + 1)) +1;
        let posCelda = document.getElementById(filaRdm + "-" + columnaRdm);

        /**
         * el true y el false lo ponemos como un string, 
         *porque el dataset los considera como cadenas*/

        if(posCelda.dataset.mina == "false"){
            posCelda.dataset.mina = "true";
            console.log("Mina -> Fila:" + filaRdm + ", columna: " + columnaRdm);
        }
    }
}



function esMina(x,y){
    //de la posición especifica retorna si hay una mina o no    
    let posicionCelda = document.getElementById(x + "-" + y);
    if(posicionCelda.dataset.mina == "true"){
        return true;
    }else{
        return false;
    }    
}

function obreCasella(i,j){    
    let posClickUser = document.getElementById(i + "-" + j);
    let hayMina = esMina(i,j);

    if(hayMina == true){
        posClickUser.innerHTML = `<img src="imatges/mina20px.jpg">`
        //En el caso de que sea una mina, le muestra el mensaje y inicia una nueva partida.

        acabado(i,j);
    }else{
        alert("No es una mina, puedes seguir jugando")
    }
}
function setMinesAdjacents(x,y,nMinesAdjacents){

}
function calculaAdjacents(){

}

function acabado(i,j){
    alert("Hay una mina, has perdido!")
    alert("EXIT!");
}

function ganado(){
    alert("Ganado!")

}
