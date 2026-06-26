// ==========================================
// CONTROLADORES DE INTERFACE (MÉTODO SPA)
// ==========================================

function mostrarSubmenuMultijogador() {
    // 1. Oculta o menu principal e botão dev
    document.getElementById("vista-inicial-menu").classList.add("escondido");
    document.getElementById("bloco-dev").classList.add("escondido");
    
    // 2. Garante que o de Regras esteja fechado
    document.getElementById("fluxo-regras").classList.remove("ativo");
    
    // 3. Ativa APENAS o multijogador
    document.getElementById("fluxo-multijogador").classList.add("ativo");
}

function mostrarSubmenuRegras() {
    // 1. Oculta o menu principal e botão dev
    document.getElementById("vista-inicial-menu").classList.add("escondido");
    document.getElementById("bloco-dev").classList.add("escondido");
    
    // 2. Garante que o de Multijogador esteja fechado
    document.getElementById("fluxo-multijogador").classList.remove("ativo");
    
    // 3. Ativa APENAS o de regras/tutorial
    document.getElementById("fluxo-regras").classList.add("ativo");
}

function voltarParaMenuInicial() {
    // Remove a atividade de ambos os submenus (eles voltam ao display: none)
    document.getElementById("fluxo-multijogador").classList.remove("ativo");
    document.getElementById("fluxo-regras").classList.remove("ativo");
    
    // Remove telas de texto dinâmicas (Regras/Saiba Mais) se existirem
    fecharJanelaTextoSPA();
    
    // Traz de volta a vista inicial completa
    document.getElementById("vista-inicial-menu").classList.remove("escondido");
    document.getElementById("bloco-dev").classList.remove("escondido");
}

// ==========================================
// DIRECIONAMENTO E REQUISITOS DOS BOTÕES
// ==========================================

function selecionarUmJogador() {
    window.location.href = "1-um-jogador/jogo.html?perguntarTutorial=true";
}

function irParaModo(caminhoPasta) {
    window.location.href = caminhoPasta + "/jogo.html";
}

function mostrarRegrasTexto() {
    // Esconde o submenu de botões das regras
    document.getElementById("fluxo-regras").classList.remove("ativo");
    
    const container = document.getElementById("container-menu");
    const divRegras = document.createElement("div");
    divRegras.id = "tela-texto-spa";
    divRegras.className = "coluna";
    divRegras.style.maxWidth = "520px";
    divRegras.style.margin = "15px auto";
    divRegras.style.animation = "transicaoSuave 0.3s ease-out";
    
    divRegras.innerHTML = `
        <h3 style="color: #ffca28; font-size: 20px; margin-bottom:15px;">Regras do Jogo</h3>
        <ul style="text-align: left; font-size: 14px; line-height: 1.6; padding-left: 20px; color: #f5f5f5;">
            <li>Cada competidor recebe <strong>7 peças</strong> no início da partida.</li>
            <li>A rodada inicia com o jogador que possuir a peça dupla de maior valor, priorizando o [6|6].</li>
            <li>As jogadas acontecem alternadamente, encaixando as pontas numéricas correspondentes da mesa.</li>
            <li>Caso não possua peça viável, o jogador deve clicar em <strong>Comprar Peça</strong>. Se o monte esvaziar, ele deverá <strong>Passar a Vez</strong>.</li>
            <li>A partida encerra quando alguém zera a mão ou quando o jogo "fecha" (nenhum número encaixa). Vence quem tiver menor soma de pontos restante.</li>
        </ul>
        <button class="btn-menu btn-secundario" onclick="voltarParaMenuInicial()" style="width:100%; margin-top: 20px;">Voltar para menu</button>
    `;
    container.appendChild(divRegras);
}

function abrirSaibaMais() {
    document.getElementById("vista-inicial-menu").classList.add("escondido");
    document.getElementById("bloco-dev").classList.add("escondido");
    
    const container = document.getElementById("container-menu");
    const divInfo = document.createElement("div");
    divInfo.id = "tela-texto-spa";
    divInfo.className = "coluna";
    divInfo.style.maxWidth = "480px";
    divInfo.style.margin = "15px auto";
    divInfo.style.animation = "transicaoSuave 0.3s ease-out";
    
    divInfo.innerHTML = `
        <h3 style="color: #ffca28;">Sobre o Projeto</h3>
        <p style="font-size: 14px; line-height: 1.6; text-align: justify; margin-bottom: 25px; color: #f5f5f5;">
            Este ecossistema de Dominó foi arquitetado como uma aplicação web responsiva focado na aplicação prática de engenharia front-end, encapsulamento de estados em JavaScript purificado e melhorias severas de acessibilidade (Quality of Life), garantindo ótima execução móvel e desktop.
        </p>
        <button class="btn-menu btn-secundario" onclick="voltarParaMenuInicial()" style="width:100%;">Voltar para menu</button>
    `;
    container.appendChild(divInfo);
}

function fecharJanelaTextoSPA() {
    const elemento = document.getElementById("tela-texto-spa");
    if(elemento) elemento.remove();
}

function visitarDesenvolvedor() {
    const resposta = confirm("Deseja sair do jogo e abrir a página em uma nova guia?");
    if (resposta) {
        window.open("https://machado-bit.github.io", "_blank");
    }
}
