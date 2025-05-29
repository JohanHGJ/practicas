const numeros = [4, -2, 7, 0, -5, 3];

let suma = 0;

for (const num of numeros){
    if (num >0){
        suma += num;
    }
}
console.log(`Suma de positivos: `, suma);
