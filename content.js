// Lista de seletores de elementos que serão manipulados
let seletores = [
    '.x2lah0s[data-tab="4"]', // Seletor para botão com classe 'x2lah0s' e atributo 'data-tab="4"'
    '#app > div > div.x78zum5.xdt5ytf.x5yr21d > div > div._aigw.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xa1v5g2.x1plvlek.xryxfnj.xd32934.x1m6msm > header > header > div > span > div > div:nth-child(1)' // Outro seletor longo e específico
];

// Função que alterna a visibilidade dos elementos com os seletores fornecidos
function alternarVisibilidade() {
    // Para cada seletor na lista 'seletores', realiza o seguinte:
    seletores.forEach((seletor) => {
        // Tenta localizar o elemento no DOM com base no seletor
        let elemento = document.querySelector(seletor);

        if (elemento) {  // Verifica se o elemento foi encontrado
            console.log(`Elemento encontrado: ${seletor}`);

            // Se o estilo display do elemento for "none", torna-o visível
            if (elemento.style.display === "none") {
                elemento.style.display = "block";  // Torna o botão visível
                console.log(`✅ ${seletor} visível!`);
            } else {  // Caso contrário, oculta o elemento
                elemento.style.display = "none";  // Torna o botão invisível
                console.log(`❌ ${seletor} oculto!`);
            }
        } else {  // Se o elemento não for encontrado
            console.log(`❌ Elemento com seletor ${seletor} não encontrado.`);
        }
    });
}

// Listener para receber mensagens do background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Verifica se a ação solicitada é para alternar a visibilidade
    if (request.action === "toggleVisibility") {
        console.log("Mensagem recebida para alternar visibilidade");

        // Chama a função que alterna a visibilidade dos elementos
        alternarVisibilidade();
    }
});
