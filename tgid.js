//Classe Usuario
class Usuario {
    constructor(nome, cpf, email) {
        this.nome = nome
        this.cpf = cpf
        this.email = email

    }

    cliente() { //Metodo para exibicao do noma do usuario, cpf e email
        return `Usuario: ${usuario.nome}   | CPF: ${usuario.cpf} | Email: ${usuario.email}`
    }
}

// Classe Produto
class Produto {
    constructor(produto, preco, quantidade) {
        this.produto = produto
        this.preco = preco
        this.quantidade = quantidade
    }
}

// Classe venda com 'prototipo' da classe produto, uma heranca
class Venda extends Produto {
    constructor(produto, preco, quantidade) {
        super(produto, preco, quantidade) // chama a funcao construtora da super classe, no caso da classe Produto
    }

    final() { //Metodo para exibicao do produto, preco e quantidade
        return `Produto: ${item.produto}    | Preco: R$${item.preco}    | Quantidade: ${item.quantidade}`
    }

}

// Classe itemvenda com 'prototipo' da classe venda, uma heranca
class ItemVenda extends Venda {
    constructor(produto, preco, quantidade) {
        super(produto, preco, quantidade) // chama a funcao construtora da super classe, no caso da classe Venda
    }

    vendaFinal() { //Metodo para valor final do produto
        return item.preco * item.quantidade
    }

    compra() { //Metodo compra
        return `O usuario ${usuario.nome} fez a compra de ${item.quantidade} ${item.produto}s no valor de R$${item.preco} cada, com valor final de R$${venda.vendaFinal()}.`
    }
}


// main
const usuario = new Usuario('Lucas123', 1234567890, 'lucasandradetrabalho@hotmail.com') //instancia de uma classe
const item = new Venda('Cadeira', 500, 2) //instancia de uma classe
const venda = new ItemVenda(item) //instancia de uma classe

console.log('==========LOJA ONLINE==========')
console.log(usuario.cliente())
console.log(item.final())
console.log(venda.compra())
console.log(`Produto: ${item.produto}`)
console.log(`Vendas: ${item.quantidade}`)
console.log(`Valor total das vendas: R$${venda.vendaFinal()} reais.`)