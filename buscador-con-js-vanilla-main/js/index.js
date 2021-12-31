//ARRAYS DE OBJETOS CON TODOS LOS AUTOS EN PROMOCIÓN
const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco'},
    {marca: 'AUDI', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro'},
    {marca: 'FORD', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco'},
    {marca: 'AUDI', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo'},
    {marca: 'CHEVROLET', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo'},
    {marca: 'FORD', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo'},
    {marca: 'DODGE', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco'},
    {marca: 'AUDI', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro'},
    {marca: 'DODGE', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco'},
    {marca: 'FORD', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro'},
    {marca: 'DODGE', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro'},
    {marca: 'AUDI', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul'}
    ];

//creamos la funcion
mostrarAutos = autos => {
  //creamos la variable para crear cards en la pag
  let cards = document.querySelector('#cards')
  //utilizamos un foreach para recorrer la array y x cada una colocar una card 
  autos.forEach(auto => {
    //con el inner imprimimos toda la info en la pag 
    cards.innerHTML += `<div class="col-sm-4 mt-3">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">${auto.marca}</h5>
      <p class="card-text">${auto.modelo} - ${auto.color}</p>
      <p class="H6">$${auto.precio}</p>
      <a href="#" class="btn btn-warning">Mas info +</a>
      </div>
    </div>
  </div>`
  });
}


window.onload = function(){
 //1.COLOCÁ ACÁ EL CÓDIGO PARA SETEAR TODOS LOS AUTOS EN PROMOCIÓN
  
  mostrarAutos(autos)
}


//2.CREA UNA FUNCIÓN ACÁ PARA FILTRAR LOS AUTOS POR MARCA
let input = document.querySelector('#filtro')
let form = document.querySelector('form')


const FiltroAutos = (e) => {
  //prevenimos la accion default del boton
  e.preventDefault();
  //convertimos el valor ingresado x el client a mayus
  let mayuscula = input.value.toUpperCase()
  //filtramos el valor
  let filtrados = autos.filter(auto => auto.marca === mayuscula)
  let cards = document.querySelector('#cards')
  //limpiamos la pag de los elementos cards
  cards.innerHTML = ''
  //y aca ingresamos los filtrados
  filtrados.forEach(filtrados => {
    cards.innerHTML += `<div class="col-sm-4 mt-3">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">${filtrados.marca}</h5>
      <p class="card-text">${filtrados.modelo} - ${filtrados.color}</p>
      <p class="H6">$${filtrados.precio}</p>
      <a href="#" class="btn btn-warning">Mas info +</a>
      </div>
    </div>
  </div>`
  });
  //vaciamos el boton de busqueda
  input.value = ''
  };
//creamos el evento y llamamos la funcion dentro
form.addEventListener('submit', FiltroAutos);

