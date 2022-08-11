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