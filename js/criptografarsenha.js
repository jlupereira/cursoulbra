//Função para criptografar a senha
function criptoSenha(senha){
return sha1(md5(senha));
}