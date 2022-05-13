const acelerador = document.getElementById("acelerador");
const freio = document.getElementById("freio");
const velocidadeAtual = document.getElementById("velocidade");

class Carro {
  constructor(carro) {
    this.carro = carro;
    this.velocidade = 0;
  }

  acelerar() {
    if (this.velocidade >= 100) return;
    this.velocidade++;
  }

  freiar() {
    if (this.velocidade <= 0) return;
    this.velocidade--;
  }
}

const carro = new Carro("Fusca");

acelerador.addEventListener('click', function() {
    carro.acelerar();
    velocidadeAtual.innerHTML = `${carro.velocidade} km/h`
})

freio.addEventListener('click', function() {
    carro.freiar();
    velocidadeAtual.innerHTML = `${carro.velocidade} km/h`
})