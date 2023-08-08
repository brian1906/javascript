
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
  