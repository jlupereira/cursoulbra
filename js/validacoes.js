/*Arquivo javascript para validação de valores
inseridos nos campos do formulário de nova conta*/

function validadatanasc() {
    var data_nasc = new Date(document.getElementById('cdatanasc').value);
    var data_atual = new Date();
    var ano_atual = data_atual.getFullYear();
    var ano_nasc = data_nasc.getFullYear();
    var idade = ano_atual - ano_nasc;
    if(idade <= 18)
        alert("Para cadastro só pode maior de 18 anos de idade");
}