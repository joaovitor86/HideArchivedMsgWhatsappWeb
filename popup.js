// Obtém o botão com o ID 'toggleBtn' no popup e adiciona um ouvinte de evento para o clique
document.getElementById('toggleBtn').addEventListener('click', function() {
    console.log("Botão de alternar visibilidade clicado!");  // Exibe uma mensagem no console quando o botão é clicado
    
    // Envia uma mensagem para o script de background solicitando a alternância de visibilidade
    chrome.runtime.sendMessage({ action: "toggleVisibility" }, function(response) {
        // Exibe a resposta recebida do script de background no console
        console.log("Resposta recebida do background:", response);
    });
});
