//Variable 'endereco' defition
let endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

//Function that lists the user Address
let list = ({}) => {
    return "O usuário mora em " + endereco.cidade + "/" + endereco.uf + ", no bairro " + endereco.bairro +
           ", na \"" + endereco.rua + "\" com n° " + endereco.numero;  
}

//Print in console the return of the function 'list()'
console.log(list(endereco)); 