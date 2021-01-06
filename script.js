const displayAtual = document.querySelector('.atual')
const displayAnterior = document.querySelector('.anterior')
const displayoperador = document.querySelector('.operador')
const botoes = document.querySelectorAll('.botao')
const botoesoperadores = document.querySelectorAll('.botaooperador')
const botaoigual = document.querySelector('.botaoigual')
const botaolimpar = document.querySelector('.botaolimpar')

class Calculadora {
    constructor(displayAtual, displayAnterior, displayoperador){
        this.displayAtual = displayAtual
        this.displayAnterior = displayAnterior
        this.displayoperador = displayoperador
        this.operador = undefined
    }

    adicionarnumero(numero){
        numero == '.' && this.displayAtual.innerText.includes('.')? numero = '': numero
        this.displayAtual.innerText.length == 16? numero = '': numero

        this.displayAtual.innerText = this.displayAtual.innerText + numero
    }

    limpar(){
        this.displayAtual.innerText = ''
        this.displayAnterior.innerText = ''
        this.displayoperador.innerText = ''
        this.operador = undefined
    }

    operacao(operador){
        this.displayAnterior.innerText = this.displayAtual.innerText
        this.displayAtual.innerText = ''
        this.displayoperador.innerText = operador
        if(operador == '÷'){
            this.operador = '/'
        }else if(operador == 'x'){
            this.operador = '*'
        }else{
            this.operador = operador
        }
    }
    
    calcular(){
        if(displayAtual.innerText == '0'){
            this.displayAtual.innerText = ''
            this.displayAnterior.innerText = ''
            this.displayoperador.innerText = ''
            this.operador = '0'
        }else{
        let resultado = eval(this.displayAnterior.innerText + this.operador + this.displayAtual.innerText)
            this.displayAtual.innerText = resultado
            this.displayAnterior.innerText = ''
            this.displayoperador.innerText = ''
            this.operador = undefined
        }
    }

}

const calculadora = new Calculadora(displayAtual, displayAnterior, displayoperador)
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        calculadora.adicionarnumero(botao.innerText)
    })
})

botaolimpar.addEventListener('click', () => {
    calculadora.limpar()
})


botoesoperadores.forEach(botaooper => {
    botaooper.addEventListener('click', () => {
        calculadora.operacao(botaooper.innerText)
    })
})

botaoigual.addEventListener('click', () => {
    calculadora.calcular()
})
