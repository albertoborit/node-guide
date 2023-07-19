//Desde Node16 el Top-level await es una característica que permite utilizar la palabra clave await fuera de una función asincrónica en el nivel superior de un módulo o script. 

//ES11
// Ejemplo sin Top-level await
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  }
  
  // Llamado a fetchData() dentro de una función asincrónica
  async function main() {
    const data = await fetchData();
    console.log(data);
  }
  main();

  
//Con Top-level await (a partir de ECMAScript 2022):
// Ejemplo con Top-level await
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);
