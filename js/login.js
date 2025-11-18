
$(document).ready(function () {

    // Função para validar o usuário
    function validarUsuario(dados) {
        const usuarioValido = { email: "teste@teste.com", senha: "123456" };
        return dados.email === usuarioValido.email && dados.senha === usuarioValido.senha;
    }

    // Quando o formulário for enviado
    $("#loginForm").submit(function (e) {
        e.preventDefault();

        var dados = {
            email: $("#email").val(),
            senha: $("#senha").val()
        };

        if (validarUsuario(dados)) {
            localStorage.setItem("usuarioLogado", dados.email); // salva login
            window.location.href = "pages/home.html"; // redireciona
        } else {
            alert("Email ou senha incorretos!");
        }
    });
});


