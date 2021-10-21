const texto = "este es Un tExto de pruebA, sarasa sarasa";

//vamos a cortar strings:
console.log("usando slice para cortar: ", texto.slice(0, 26));
console.log("usando slice para cortar: ", texto.slice(27, 41));
console.log("usando slice para cortar: ", texto.slice(27));
console.log("usando slice para cortar al vesre: ", texto.slice(-6));
console.log("usando slice para cortar al vesre: ", texto.slice(-13, -6));

//reemplazar palabras:
console.log(
  "reemplazar la primera ocurrencia: ",
  texto.replace("sarasa", "gatitos")
);
//g es global (todas las ocurrencias), i es insensitive (mayusc/minusc). Sin la g, reemplaza solo el primero. Sin la i, si hay mayúsculas/minúsculas no las reemplaza
console.log(
  "reemplazar todas las ocurrencias: ",
  texto.replace(/sarasa/gi, "gatitos")
);
console.log("reemplazar todas las ocurrencias:", texto.replace(/a/gi, "o"));

//mayusc, minusc
console.log("a minusculas: " + texto.toLowerCase());
console.log(`a mayuscula: texto ${texto.toUpperCase()}`);
//no es lo más usado, pero el locale tiene en cuenta el idioma del usuario (si les hace cosas raras con los acentos pueden usar esto)
console.log(`a mayuscula: texto ${texto.toLocaleUpperCase()}`);

//convertir a array: con esto separa todos:
console.log("a array:", texto.split(""));
//con esto separa usando los espacios:
console.log("a array:", texto.split(" "));
//con esto va a separar con la coma:
console.log("a array:", texto.split(","));
//ahora quiero separar y que me traiga el segundo elemento del array. Ojo con no ponerle punto al elegir qué elemento agarrar!:
console.log("a array:", texto.split(",")[1]);

//undefined no es un error! es el estado en que están las cosas
console.log("a array:", texto.split(",")[5]);