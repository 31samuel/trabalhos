const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordconfirmation = document.getElementById('passwordconfirmation');

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    checkinputs();
});
function checkinputs() {
    const usernamevalue = username.value;
    const emailvalue    =    email.value;
    const passwordvalue = password.value;
    const  passwordconfirmationvalue =  passwordconfirmation.value;



    if (usernamevalue = '') {
        seterrorfor(username,"o nome do usuario e obrigatorio.");
    }else{
        setSuccessfor(username);
    }
    if (emailvalue = '') {
        seterrorfor(email,'o email e obrigatorio.');
    }
}


function seterrorfor(input,message){
    const formcontrol = input.parenElement;
    const small = formcontrol.queryselector('small')

    // Adiciona a mensagem de erro
    small.innertext = message;

    // adiciona a clase de erro
    formcontrol.classname = "form-control error"
}
function setSuccessfor(input){
    const formcontrol = input.parenElement;

    // Adicionar a classe do sucesso
    formcontrol.classname = "form-control success";
}