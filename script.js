let senha = Math.floor(Math.random() * 50) + 1;

let tentativas = 0;
let maxTentativas = 7;

const numero = document.getElementById('numero');
const tentar = document.getElementById('tentar');
const mensagem = document.getElementById('mensagem');
const tentativasTexto = document.getElementById('tentativas');
const cofre = document.getElementById('cofre');
const overview = document.getElementById('overview');
const resultado = document.getElementById('resultado');
const reiniciar = document.getElementById('reiniciar');

// Verificar a senha

function verificarSenha() {

    let valor = Number(numero.value);

    if (numero.value === '') {
        mensagem.textContent = 'Digite um número!';
        return;
    }

    if (valor < 1 || valor > 50) {
        mensagem.textContent = 'Digite um número entre 1 e 50!';
        return;
    }

    if (tentativas >= maxTentativas) {
        return;
    }

    tentativas++;

    tentativasTexto.textContent =
        'Tentativas: ' + tentativas + ' de 7';

    if (valor === senha) {

        mensagem.textContent = 'Senha correta!';

        cofre.src = 'images/cofre-aberto.png';

        resultado.textContent =
            'Você descobriu a senha em ' + tentativas + ' tentativa(s)!';

        overview.style.display = 'flex';

        tentar.disabled = true;

    } else {

        if (valor < senha) {
            mensagem.textContent = 'A senha é maior!';
        } else {
            mensagem.textContent = 'A senha é menor!';
        }

        numero.value = '';

        let restantes = maxTentativas - tentativas;

        if (restantes === 2) {
            mensagem.textContent += ' Atenção! Restam apenas 2 tentativas!';
            mensagem.classList.add('alerta');
        }

        if (restantes === 0) {
            mensagem.textContent = 'Você perdeu! Suas tentativas acabaram.';
            tentar.disabled = true;
        }
    }

}

// Botão tentar

tentar.addEventListener('click', verificarSenha);

// Permitir apertar Enter

numero.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificarSenha();
    }
});

// Reiniciar o jogo

function reiniciarJogo() {

    senha = Math.floor(Math.random() * 50) + 1;

    tentativas = 0;

    numero.value = '';

    mensagem.textContent = '';

    tentativasTexto.textContent = 'Tentativas: 0 de 7';

    mensagem.classList.remove('alerta');

    cofre.src = 'images/cofre-fechado.png';

    tentar.disabled = false;

    overview.style.display = 'none';

}

// Botão reiniciar

reiniciar.addEventListener('click', reiniciarJogo);