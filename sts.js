//Santinho na Área
let mail = document.querySelector("#email");
let pass = document.getElementById("esqeceuSenha");
let btnEntrar = document.querySelector("#entrar");
let senha = document.getElementById('senha');

mail.addEventListener("input", function(e){
  var emailDigitado = mail.value;
  if (emailDigitado ==="" || emailDigitado.indexOf("@") === -1 || emailDigitado.indexOf(".") === -1){
    btnEntrar.disabled = true;
    pass.style.opacity = "0.3";


  }else{
    mail.disabled = false;
    pass.style.opacity = "1";
    btnEntrar.disabled = false;
  }
});

senha.addEventListener("input", function(e){
  var senhaDigitada = senha.value;
  if (senhaDigitada.length < 8 ){
    btnEntrar.disabled = true;
  

  }else{
    btnEntrar.disabled = false;
  }
});

// function chkemail(){
//       //indexOf(verifica se tem "@" ou "." na string )
//       if (Email === "" || Email.indexOf("@") === -1 || Email.indexOf(".") === -1) {
//           alert("Por favor, informe um E-MAIL válido!");
//           return false;
//       }
// }

//indexOf(verifica se tem "@" ou "." na string )

/*
//desabilita o botão no início
document.getElementById("botao").disabled = true;

//cria um event listener que escuta mudanças no input
document.getElementById("input").addEventListener("input", function(event){

  //busca conteúdo do input
    var conteudo = document.getElementById("input").value;

    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      //habilita o botão
      document.getElementById("botao").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("botao").disabled = true;
    }
}); 
*/
/* function validaEmailSenha(){
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
var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("spero um e-mail, querida!");
  } else {
    email.setCustomValidity("");
  }
});*/
