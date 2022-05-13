const texto = document.getElementById("texto");
const button = document.getElementById("button");

class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: true,
      get: () => cpfEnviado.replace(/\D+/g, ""),
    });
  }

  valida() {
    if (typeof this.cpfLimpo === "undefined") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
  }

  criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }
}

button.addEventListener("click", function () {
  const cpfDigitado = document.getElementById("cpf-digitado").value;
  const cpf = new ValidaCPF(cpfDigitado);

  if (cpf.valida()) {
    texto.innerHTML = "CPF válido";
    texto.style.color = "green";
  } else {
    texto.innerHTML = "CPF inválido";
    texto.style.color = "red";
  }
});
