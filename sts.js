function validaEmailSenha(){
    const validouEmail = validadoEmail();
    document.getElementById("esqeceuSenha").disabled = !validouEmail;
    const validouSenha = validadoSenha();
    document.getElementById("entrar").disabled = !validadoEmail || !validadoSenha;
}
function validadoEmail(){
    const email = document.getElementById("email").Value;
    if(!email){
        return false;
    }
    return chkEmail(email);
      
}
function validadoSenha(){
    const senha = document.getElementById("senha").Value;
    if(!senha){
        return false;
    }
    return true;
      
}
function chkEmail(email){
return /\S+@\S+\.\S+/.test(email);
}


/*Santinho na Área
const Email = document.querySelector(#email);

function chkemail(){
      //indexOf(verifica se tem "@" ou "." na string )
      if (Email === "" || Email.indexOf("@") === -1 || Email.indexOf(".") === -1) {
          alert("Por favor, informe um E-MAIL válido!");
          return false;
      }
}

function validaEmail(email){
   
    if (Email === -1){
        document.querySelector().enable;
    }else{
        document.querySelector().disabled;

    }

} */