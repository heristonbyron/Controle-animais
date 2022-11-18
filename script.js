// Bloquear Botões
let form = document.querySelector("#formulario");

let ticketMae = form["ticket_mae"]
let valorcompra = form["valor"]
let aquisicao = form["aquisicao"]

console.log(form)

function ativarReadonly() {
    ticketMae.readOnly = true;
    valorcompra.readOnly = false;
}

function desativarReadonly() {
    ticketMae.readOnly = false;
    valorcompra.readOnly = true;
}

// Adicionar lista Vacinação
var ul = document.getElementById("lista--secundaria_vacinacao");
var li;
var itemId;
var item;

addVacinacao = function(){
    if(document.getElementById("vacinacao").value != ""){
        item = document.getElementById("vacinacao").value;
        itemId = ul.childElementCount;
        li = createItemEl(item.value,itemId);
        li.appendChild(createRemoveVacinacaoBtn(itemId));
        ul.appendChild(li);
    }
}

removeVacinacao = function(itemId){
    for ( i = 0 ; i< ul.children.length ; i++){
        if(ul.children[i].getAttribute("index") == itemId){
            ul.children[i].remove();
        }
    }
}

createItemEl = function(itemValue, itemId){
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

createRemoveVacinacaoBtn = function(itemId){
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeVacinacao("+itemId+")");
    btn.innerHTML ="X";
    return btn;
}

// Adicionar lista Filiação
var ul = document.getElementById("lista--secundaria_filiacao");
var li = document.getElementById("lista--secundaria_linha");;
var itemId;
var item;

addFiliacao = function(){
    if(document.getElementById("filiacao").value != ""){
        item = document.getElementById("filiacao").value;
        itemId = ul.childElementCount;
        li = createItemEl(item.value,itemId);
        li.appendChild(createRemoveFiliacaoBtn(itemId));
        ul.appendChild(li);
    }
}

removeFiliacao = function(itemId){
    for ( i = 0 ; i< ul.children.length ; i++){
        if(ul.children[i].getAttribute("index") == itemId){
            ul.children[i].remove();
        }
    }
}

createItemEl = function(itemValue, itemId){
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

createRemoveFiliacaoBtn = function(itemId){
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeFiliacao("+itemId+")");
    btn.innerHTML ="X";
    return btn;
}