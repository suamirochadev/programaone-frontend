console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro)

//arrays

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`) //adicionar um item a lista, depois que a lista ja foi declarada.

console.log("Destinos possíveis:")

// console.log(salvador, saoPaulo, rioDeJaneiro)

//retirar item da lista
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

//listaDeDestinos = 2;

//Para mostrar um item especifico
console.log(listaDeDestinos[1]);
