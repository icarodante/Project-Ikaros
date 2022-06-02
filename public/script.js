var b = false

function entrar(){
    var emailVar = inpt_user.value
    var senhaVar = inpt_senha.value
    
    if(senhaVar == "" || emailVar == ""){
        alert("preencha todos os campos")
    } 
    
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
        
        if (resposta.ok) {
            console.log(resposta);
            
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                
                setTimeout(function () {
                    window.location = "index.html";
                }, 1000); // apenas para exibir o loading
                
            });
            
        } else {
            alert("Houve um erro ao tentar realizar o login!");
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    
    return false;
}
function cadastrar() {
    var nomeVar = inpt_nome.value;
    var sobrenomeVar = inpt_sobrenome.value;
    var emailVar = inpt_email.value;
    var senhaVar = inpt_senha.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;
    
    if (nomeVar == "" ||sobrenomeVar == ""|| emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        alert("preencha todos os campos")
    }
    else{
        window.location.href = "login.html"
        
        // Enviando o valor das input's
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                sobrenomeServer: sobrenomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        })
    }
}
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    
    var b_usuario = document.getElementById("b_usuario");
    
    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        
    } else {
        window.location = "../login.html";
    }

}
function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "225px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
var iduser = sessionStorage.getItem("ID_USUARIO")
function curtir(id){
    if (id == 'imgnautopia'){
        b = !b
        if (b == true){
            fetch("/usuarios/curtir", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    postServer: "postNautopia",
                    usuarioServer: iduser
                })
            })

        } else{

        }
    }
}

b_usuario.innerHTML = sessionStorage.NOME_USUARIO;