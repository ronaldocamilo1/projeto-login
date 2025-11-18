// SIMULA UM BANCO DE DADOS NO LOCALSTORAGE
function getMensagens() {
    return JSON.parse(localStorage.getItem("mensagens")) || [];
}

function salvarMensagens(lista) {
    localStorage.setItem("mensagens", JSON.stringify(lista));
}

// Enviar mensagem
function enviarMensagem() {
    const texto = $("#textoMensagem").val().trim();

    if (texto === "") {
        alert("Digite uma mensagem!");
        return;
    }

    let mensagens = getMensagens();

    mensagens.push({
        id: Date.now(),
        texto: texto
    });

    salvarMensagens(mensagens);

    $("#textoMensagem").val("");

    carregarMensagens();
}

// Listar mensagens
function carregarMensagens() {
    let mensagens = getMensagens();

    $("#listaMensagens").empty();

    mensagens.forEach(msg => {
        $("#listaMensagens").append(`
            <li>
                ${msg.texto}
                <button onclick="excluirMensagem(${msg.id})">Excluir</button>
            </li>
        `);
    });
}

// Excluir mensagem
function excluirMensagem(id) {
    let mensagens = getMensagens();

    mensagens = mensagens.filter(msg => msg.id !== id);

    salvarMensagens(mensagens);

    carregarMensagens();
}
v