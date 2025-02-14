# Extensão de Controle de Visibilidade no WhatsApp Web

Esta é uma extensão do Google Chrome que permite alternar a visibilidade de elementos específicos na página do WhatsApp Web. Você pode ocultar ou mostrar botões e outros elementos da interface da página de maneira simples, tudo com o clique de um botão.

## Funcionalidade

A extensão permite alternar a visibilidade de múltiplos elementos na página do WhatsApp Web com base em seletores CSS específicos. Você pode personalizar os seletores no código para controlar quais elementos deseja manipular. Por exemplo, a extensão pode ocultar o botão "Arquivadas" com a classe `.x2lah0s[data-tab="4"]` ou outros elementos da interface usando seletores CSS complexos.

## Como Funciona

- A extensão utiliza a API do Google Chrome para injetar um script na página do WhatsApp Web.
- O script busca os elementos definidos em uma lista de seletores CSS e alterna a visibilidade deles entre `visible` e `hidden` quando acionado.
- A visibilidade é alternada com base no estilo `display` dos elementos, que pode ser ajustado para `none` (ocultar) ou `block` (mostrar).

## Pré-Requisitos

- Google Chrome 109.0.5414.120 ou superior.
- Sistema operacional Windows 7 ou superior (a extensão foi testada nesse ambiente, mas deve funcionar em outros sistemas também).

## Como Instalar

1. Baixe ou clone este repositório.
2. Abra o Chrome e vá para a página de extensões: `chrome://extensions/`.
3. Ative o **Modo de desenvolvedor** no canto superior direito.
4. Clique em **Carregar sem compactação** e selecione a pasta onde você baixou ou clonou o repositório.
5. A extensão será carregada e o ícone será adicionado à barra de ferramentas do Chrome.

## Como Usar

1. Após instalar a extensão, você verá um ícone na barra de ferramentas do Chrome.
2. Navegue até [WhatsApp Web](https://web.whatsapp.com).
3. Clique no ícone da extensão na barra de ferramentas para alternar a visibilidade dos elementos definidos.
4. A visibilidade dos elementos será alternada entre **visível** e **invisível** a cada clique.

## Personalização

Você pode personalizar os elementos que deseja ocultar ou exibir editando a lista de seletores no arquivo `content.js`. A lista de seletores pode incluir qualquer seletor CSS válido que identifique os elementos da página do WhatsApp Web.

Exemplo de lista de seletores:

```js
let seletores = [
    '.x2lah0s[data-tab="4"]',  // Seletor para o botão 'Arquivadas'
    '#app > div > div.x78zum5.xdt5ytf.x5yr21d > div > div._aigw.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xa1v5g2.x1plvlek.xryxfnj.xd32934.x1m6msm > header > header > div > span > div > div:nth-child(1)'  // Outro seletor longo
];
