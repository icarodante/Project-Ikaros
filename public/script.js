var b = false

function entrar() {
    var emailVar = inpt_user.value
    var senhaVar = inpt_senha.value

    if (senhaVar == "" || emailVar == "") {
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

    if (nomeVar == "") {
        span_nome_alert.innerHTML = `<b title="Campo nome não pode estar vazio">!</b>`;
    } else {
        span_nome_alert.innerHTML = "";
        if (sobrenomeVar == "") {
            span_sobrenome_alert.innerHTML = `<b title="Campo sobrenome não pode estar vazio">!</b>`;
        } else {
            span_sobrenome_alert.innerHTML = "";
            if (emailVar.indexOf("@") == -1) {
                span_email_alert.innerHTML = `<b title="Campo email deve conter @">!</b>`;
            } else {
                span_email_alert.innerHTML = "";
                if (emailVar.endsWith("gmail.com") == false) {
                    span_email_alert.innerHTML = `<b title="Campo email dever terminar com gmail.com">!</b>`;
                } else {
                    span_email_alert.innerHTML = "";
                    if (senhaVar == "") {
                        span_senha_alert.innerHTML = `<b title="Campo senha não pode estar vazio">!</b>`;
                    } else {
                        span_senha_alert.innerHTML = "";
                        if (senhaVar != confirmacaoSenhaVar) {
                            span_conf_alert.innerHTML = `<b title="As senhas não podem ser diferentes ">!</b>`;
                        } else {
                            span_conf_alert.innerHTML = "";

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
                }
            }
        }
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
    nautopiahearts.innerHTML = nauhearts
    mrthearts.innerHTML = mortehearts
    ascanghearts.innerHTML = canghearts
    greasehearts.innerHTML = grhearts
    sweeneyhearts.innerHTML = toddhearts
    chicagohearts.innerHTML = chghearts
    addamshearts.innerHTML = addhearts
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
var nauhearts = 1205
var mortehearts = 925
var canghearts = 1265
var grhearts = 1332
var toddhearts = 1568
var chghearts = 1426
var addhearts = 1612

function likes(pub, posicao, variavel, imagem) {
    validar[posicao] = !validar[posicao]
    if (validar[posicao] == true) {
        variavel = variavel + 1
        pub.innerHTML = variavel
        imagem.src = "midia/icons8-heart-fiiled.png"
    } else {
        variavel - 1
        pub.innerHTML = variavel
        imagem.src = "midia/icons8-heart-50.png"
    }
}
function curtir(id) {
    if (id == 'imgnautopia') {
        likes(nautopiahearts, 0, nauhearts, imgnautopia)
    } else if (id == 'imgmrt') {
        likes(mrthearts, 1, mortehearts, imgmrt)
    } else if (id == 'imgascang'){
        likes(ascanghearts,2,canghearts,imgascang)
    } else if (id == 'imggrease'){
        likes(greasehearts,3,grhearts,imggrease)
    } else if (id == 'imgsweeney'){
        likes(sweeneyhearts,4,toddhearts,imgsweeney)
    } else if (id == 'imgchicago'){
        likes(chicagohearts,5,chghearts,imgchicago)
    } else if (id == 'imgaddams'){
        likes(addamshearts,6,addhearts,imgaddams)
    }
}
var validar = [false, false, false, false, false, false, false]
