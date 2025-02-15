chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggleVisibility") {
        console.log("Comando de alternância recebido no background");
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "toggleVisibility" });
            sendResponse({ status: "Mensagem enviada para content.js" });
        });
        return true;  // Necessário para usar sendResponse de forma assíncrona
    }
});
