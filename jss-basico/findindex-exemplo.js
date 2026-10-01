let carros = [
    { id: 1, nome: "Nissan Skyline GT-R R32", preco: 250000 },
    { id: 2, nome: "Nissan Skyline GT-R R33", preco: 300000 },
    { id: 3, nome: "Nissan Skyline GT-R R34", preco: 650000 },
    { id: 4, nome: "Nissan GT-R R35", preco: 1200000 },
    { id: 5, nome: "Nissan GT-R R35 NISMO", preco: 1800000 },
    { id: 6, nome: "Nissan GT-R R36", preco: 2000000 }
];

for (i = 0; i < carros.length; i++) {
    if(carros[i].preco > 250000){
    console.log("Carro encontrado");
    console.log(i)
    break};
    
}

const carro_encontrado = carros.findIndex((c) => c.preco > 250000);
console.log(carro_encontrado);