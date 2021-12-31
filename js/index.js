/* variable.forEach(cosasQHayEnLaLista => {
    alert(cosasQHayEnLaLista)
});
 */
let info = ['david', 'armando', 'pepe', 'sergio']

info.forEach(nombres => {
    alert(nombres)
})

//FILTER

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(palabra => palabra.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


//REDUCE


let numeros = [1,2,3,4]
const total = numeros.reduce((total, numeros) => total + numeros, 0)

console.log(total)

//SOME Verifica si existe eso en el array 
const numeritos = [1, 2, 3, 4, 5];

const even = (numeritos) => numeritos>10;

console.log(numeritos.some(even));

//EVERY verifica si todos en el array tienen eso 

//es solo ... y te inserta un array dentro de otra

const miArray = [3,4]
const arr = [1,1, ...miArray,5,6]

console.log(arr);

const miArray = [89,90]

function suma(num1, num2){
    return num1+num2
}
