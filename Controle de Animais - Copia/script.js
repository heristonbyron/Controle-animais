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