
function agregar(){
    const input = document.querySelector("#entrada");
    const texto = document.createElement("li"); 
    texto.textContent = input.value.toLowerCase();
    console.log(input);
    const lista = document.querySelector("#lista");
    lista.insertAdjacentElement("beforeend", texto);
    input.value='';
}

function eliminar(){
    const lista = document.querySelector("li");
    lista.remove();
}

function eliminar_todo(){
    const lista = document.querySelector("#lista");
   
    while (lista.innerHTML.trim() != "") {
        console.log(lista.firstChild);
        eliminar();
    }

}
function tiempo(){
    
    contar();
    cont = setInterval(contar,20)
    document.querySelector("#start").disabled = true;
}
function parar(){
    
    clearInterval(cont)
    document.querySelector("#start").disabled = false;
}

function reiniciar(){
    mili=0,segundo=0, minutos=0, horas=0;
    clearInterval(cont)
    imprimir(mili,segundo,minutos,horas);
    document.querySelector("#start").disabled = false;
}
let mili=0,segundo=0, minutos=0, horas=0;
function contar(){
    mili++;
    if (mili>59){
        segundo++;
        mili=0;
    }
    if (segundo>59){
        minutos++;
        segundo=0;
    }
    if (minutos>59){
        horas++;
        minutos=0;
    }
    if (horas>24){
        horas=0;
    }

    imprimir(mili,segundo,minutos,horas)
}

function imprimir(mil,seg,min,hor){
    if(mil<10){
        mil = "0" + mil;
    }
    if(seg<10){
        seg = "0" + seg;
    }
    if(min<10){
        min = "0" + min;
    }
    if(hor<10){
        hor = "0" + hor;
    }

    document.querySelector("#horas").innerHTML = hor;
    document.querySelector("#minutos").innerHTML = min;
    document.querySelector("#segundos").innerHTML = seg;
    document.querySelector("#milisegundos").innerHTML = mil;
}

