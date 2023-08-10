
class Producto {
    constructor(titulo, precio, descuento, descripcion) {
      this.titulo = titulo;
      this.precio = precio;
      this.descuento = descuento;
      this.descripcion = descripcion;
    }
  
    calcularPrecioConDescuento() {
      return this.precio * (1 - this.descuento / 100);
    }
  
    calcularPrecioEnCuotas(cuotas) {
      return this.precio / cuotas;
    }
  
    mostrarDetalle() {
      const precioConDescuento = this.calcularPrecioConDescuento();
      console.log(`Producto: ${this.titulo}`);
      console.log(`Precio: $${this.precio}`);
      console.log(`Descuento: ${this.descuento}%`);
      console.log(`Precio con Descuento: $${precioConDescuento}`);
      console.log(`Descripción: ${this.descripcion}`);
    }
  }
  
  const producto1 = new Producto(
    "Producto 1",
    100,
    10,
    "Esta es la descripción del Producto 1"
  );
  
  const producto2 = new Producto(
    "Producto 2",
    200,
    15,
    "Esta es la descripción del Producto 2"
  );
  
  producto1.mostrarDetalle();
  console.log("------------------------");
  producto2.mostrarDetalle();
  let productos=[
  producto1,
  producto2
  ]
  console.log(productos)
  
  const userAdmin ={
    username: 'admin',
    password: '1234',
  };
  function login(){
    const username= prompt("Ingrese el usuario:");
    const password= prompt("ingrese la contraseña");

    console.log(username);
    console.log(password);

    if(username == userAdmin.username && password == userAdmin.password){
        console.log("Logueado!");
        return true;
    }
    else {
      console.log("No logueado!")
      return false;
    }
// const numeroAIterar = prompt('Mandale un numero rey');
// const salir = Number(prompt('Que numero te gusta pa salir?'));

// for (let i = 1; i <= Number(numeroAIterar); i++) {
//   if (i % 2 === 0) {
//     console.log(`
//             El numero ${i} es par
//         `);
//   }

//   if (i === salir) {
//     console.log(i);
//     break;
//   }
// }

let intentos = 0;
let numeroUsuario = Number(prompt('Que numero tiras?'));
const numeroSecreto = 7;

do {
  if (numeroUsuario === numeroSecreto) {
    console.log(`Epa!, le pegaste pa`);
  } else {
    numeroUsuario = Number(prompt('Ingresá otro numero'));
  }

  }
  // const numeroAIterar = prompt('Mandale un numero rey');
// const salir = Number(prompt('Que numero te gusta pa salir?'));

// for (let i = 1; i <= Number(numeroAIterar); i++) {
//   if (i % 2 === 0) {
//     console.log(`
//             El numero ${i} es par
//         `);
//   }

//   if (i === salir) {
//     console.log(i);
//     break;
//   }
// }

let intentos = 0;
let numeroUsuario = Number(prompt('Que numero tiras?'));
const numeroSecreto = 7;

do {
  if (numeroUsuario === numeroSecreto) {
    console.log(`Epa!, le pegaste pa`);
  } else {
    numeroUsuario = Number(prompt('Ingresá otro numero'));
  }
