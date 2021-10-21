const texto = "este es un texto de prueba, sarasa sarasa";
const num = 145;

console.log(texto.length);                   //tiene 41 de largo
console.log(texto.charAt(40));               //pero si si el primero es 0, el último es 40
console.log(texto[6].toUpperCase());         //es lo mismo que usar charAt. Corchete sin punto adelante, solo punto al final. Podemos acumular varios métodos
console.log(texto)                           //es una constante, puedo aplicarle métodos, ver el largo, etc, pero sigue siendo el mismo texto al final del día!

//esto no va a andar:
console.log(num.length);


