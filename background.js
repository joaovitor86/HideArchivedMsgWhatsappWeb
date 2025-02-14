// Listener para receber mensagens do content.js ou outros scripts
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Verifica se o comando recebido é para alternar a visibilidade
    if (request.action === "toggleVisibility") {
        console.log("Comando de alternância recebido no background");

        // Consulta a aba ativa da janela atual
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            // Envia uma mensagem para o content.js da aba ativa, pedindo para alternar a visibilidade
            chrome.tabs.sendMessage(tabs[0].id, { action: "toggleVisibility" });

            // Responde à mensagem recebida confirmando que a ação foi executada
            sendResponse({ status: "Mensagem enviada para content.js" });
        });

        // Retorna true para indicar que a resposta será enviada de forma assíncrona
        return true;
    }
});
