class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
let ninja = new Heroi("Tiririco", 43, "ninja");
let monge = new Heroi("Florentino", 53, "monge");
let mago = new Heroi("Eustaquio", 19, "mago");
let guerreiro = new Heroi("Charizardo", 36, "guerreiro");

mago.atacar();
guerreiro.atacar(); 
ninja.atacar();
guerreiro.atacar(); 
