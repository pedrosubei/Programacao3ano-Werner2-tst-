const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

console.log(botoes);

const campoSenha = document.querySelector('#campo-senha');
const checkbox = documemt.querySelector('.checkbox');

console.log (checkbox[0].checked);

const letrasMaiusculas = 'ABCDEFGIHJKLMNOPQRSTUVXWYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxwyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
geraSenha();

function geraSenha() {

let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
      
    }
campoSenha.value = senha;
}


