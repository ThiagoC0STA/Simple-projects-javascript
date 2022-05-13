class conta {
    constructor (agencia, conta, valor) {
        this.agencia = agencia
        this.conta = conta
        this.valor = valor
    }

    Show(valor) {
        console.log(`Ag/c: ${this.agencia, this.conta} valor na conta: ${valor}`)
    }

    Sacar(value) {

        if(value > this.valor) {
            console.log("Saldo insuficiente")
        } else {
            let novoValor = this.valor - value
            this.valor = novoValor
            this.Show(novoValor);
        }
    }

    Depositar(value) {
        let novoValor = this.valor + value
        this.valor = novoValor
        this.Show(novoValor);
    }
}

const conta1 = new conta(0001, 123456789, 100)
conta1.Depositar(10)
conta1.Sacar(90)
conta1.Sacar(30)
