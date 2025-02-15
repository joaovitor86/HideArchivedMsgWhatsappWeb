// Lista de seletores de elementos
let seletores = [
    '.x2lah0s[data-tab="4"]', // Botão com classe 'x2lah0s' e atributo 'data-tab="4"'
    '#app > div > div.x78zum5.xdt5ytf.x5yr21d > div > div._aigw.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xa1v5g2.x1plvlek.xryxfnj.xd32934.x1m6msm > header > header > div > span > div > div:nth-child(1)' // Outro seletor longo
];

// Função para alternar a visibilidade de cada elemento
function alternarVisibilidade() {
    seletores.forEach((seletor) => {
        let elemento = document.querySelector(seletor);

        if (elemento) {
            console.log(`Elemento encontrado: ${seletor}`);
            if (elemento.style.display === "none") {
                elemento.style.display = "block";  // Torna o botão visível
                console.log(`✅ ${seletor} visível!`);
            } else {
                elemento.style.display = "none";  // Torna o botão invisível
                console.log(`❌ ${seletor} oculto!`);
            }
        } else {
            console.log(`❌ Elemento com seletor ${seletor} não encontrado.`);
        }
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggleVisibility") {
        console.log("Mensagem recebida para alternar visibilidade");
        alternarVisibilidade();  // Alterna visibilidade para todos os elementos
    }
});
