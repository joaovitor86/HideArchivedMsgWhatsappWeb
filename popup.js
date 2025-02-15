let tgBtn = document.getElementById('toggleBtn');

tgBtn.addEventListener('click', function() {
    console.log("Botão de alternar visibilidade clicado!");
	
	// Pega o texto atual do botão
    let currentText = tgBtn.innerText;
	
	// Altera o texto do botão dependendo do texto atual
    if (currentText === "Ocultar") {
        tgBtn.innerText = "Reexibir";  // Altera o texto para "Ocultar"
    } else {
        tgBtn.innerText = "Ocultar";  // Altera o texto para "Mostrar"
    }
    
    chrome.runtime.sendMessage({ action: "toggleVisibility" }, function(response) {
        console.log("Resposta recebida do background:", response);
    });
});
