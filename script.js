corpo = document.querySelector('body');

function dw(texto){
    corpo.innerText += texto;
}
function gebd(id){
    return document.getElementById(id);
}
class Bilhetes{
    constructor(){
        this.titulo = "";
        this.subtitulo_l1 = "";
        this.subtitulo_l2 = "";
        this.data = "";
        this.numero_inicial = 1;
    }
    definir_titulo(titulo){
        this.titulo = titulo;
    }
    definir_subtitulo_l1(subtitulo_l1){
        this.subtitulo_l1 = subtitulo_l1;
    }
    definir_subtitulo_l2(subtitulo_l2){
        this.subtitulo_l2 = subtitulo_l2;
    }
    definir_data(data){
        this.data = data;
    }

    iniciar(){
        dw('<div class="area_externa"><div class="area_interna">');
    }

    exibir_bilhete(){
        dw('<div class="bilhete">');
            dw('<div class="left">');
                dw('<div class="info">');
                    dw('<span>Nome: </span>');
                    dw('<span>Contato: </span>');
                dw('</div>');
            dw('</div>');
            dw('<div class="right">');
                dw('<div class="info">')
                    dw('<h1>' + this.titulo + '</h1>');
                    dw('<div class="texto_centralizado">')
                        dw('<span>' + this.subtitulo_l1 + '</span>');
                        dw('<span>' + this.subtitulo_l2 + '</span>');
                    dw('</div>')
                    dw('<small>Data do sorteio: ' + this.data + '</small>')
                dw('</div>')
            dw('</div>');
        dw('</div>');
    }

    gerar_todos_bilhetes(){
        var contagem = 0;
        while(contagem < 10){
            contagem++;
            this.exibir_bilhete();
        }
    }

    finalizar(){
        dw('</div></div>');
    }

}
class Numeros{
    constructor(){
        this.numero_inicial = 1;
    }

    definir_numero_inicial(numero){
        this.numero_inicial = numero;
    }

    iniciar(){
        dw('<div class="area_externa"><div class="area_interna">');
    }

    exibir_numero(numero){
        var numero_exibir = ("000" + numero).slice(-3);
        dw('<div class="numero">');
            dw('<div class="left">');
                dw("<span>" + numero_exibir + "</span>");
            dw('</div>');
            dw('<div class="right">');
                dw("<span>" + numero_exibir + "</span>");
            dw('</div>');
        dw('</div>');
    }

    gerar_todos_numeros(){
        var contagem = 0;
        while(contagem < 10){
            contagem++;
            this.exibir_numero(this.numero_inicial);
            this.numero_inicial++;
        }
    }

    finalizar(){
        dw('</div></div>');
    }

}
class LerFormulario{
    constructor(){
        this.formulario = ""
        this.titulo = "";
        this.subtitulo_l1 = "";
        this.subtitulo_l2 = "";
        this.data = "";
        this.numero_inicial = "";
    }
    obter_titulo(){
        return this.titulo;
    }
    obter_subtitulo_l1(){
        return this.subtitulo_l1;
    }
    obter_subtitulo_l2(){
        return this.subtitulo_l2;
    }
    obter_data(){
        return this.data;
    }
    obter_numero_inicial(){
        return this.numero_inicial;
    }
    definir_formulario(formulario){
        this.formulario = formulario;
    }
    ler_dados(){
        this.titulo = this.formulario.querySelector("#titulo").value;
        this.subtitulo_l1 = this.formulario.querySelector("#subtitulo_l1").value;
        this.subtitulo_l2 = this.formulario.querySelector("#subtitulo_l2").value;
        this.data = this.formulario.querySelector("#data").value;
        this.numero_inicial = this.formulario.querySelector("#numero_inicial").value;
    }
    restaurar_valores(){
        gebd('titulo').value = this.titulo;
        gebd('subtitulo_l1').value = this.subtitulo_l1;
        gebd('subtitulo_l2').value = this.subtitulo_l2;
        gebd('data').value = this.data;
        gebd('numero_inicial').value = this.numero_inicial;
    }
}
const bilhetes = new Bilhetes();
const numeros = new Numeros();
const dados_formulario = new LerFormulario();