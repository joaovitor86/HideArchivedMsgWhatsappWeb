document.getElementById('toggleBtn').addEventListener('click', function() {
    console.log("Botão de alternar visibilidade clicado!");
    
    chrome.runtime.sendMessage({ action: "toggleVisibility" }, function(response) {
        console.log("Resposta recebida do background:", response);
    });
});
