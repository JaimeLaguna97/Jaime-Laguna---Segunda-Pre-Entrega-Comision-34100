class Producto {
    constructor(nombre, precioCompra, precioVenta, cantidad){
        this.nombre = nombre.toUpperCase();
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidad = cantidad;
    }
    calcularCosto = () => this.cantidad * this.precioCompra;
}

function agregarProductos(){
    let productos = [];
    let numeroProductos = parseInt(
        prompt("Cuantos productos desea registrar?")
    );

    for(let index = 0; index < numeroProductos; index++){
        let nombre = prompt ("Ingrese el nombre");
        let precioCompra =  parseFloat(prompt("Ingrese el precio de compra"));
        let precioVenta = parseFloat(prompt("Ingrese el precio de venta"));
        let cantidad = parseInt(prompt("Ingrese la cantidad"));

        let productoARegistrar = new Producto(
            nombre, 
            precioCompra,
            precioVenta,
            cantidad
        );

        productos.push(productoARegistrar);
    }

    return productos
}

function mostrarProductos(productos){
    for(let producto of productos){
        console.log(producto);
        console.log(producto.nombre);
    }
}

function calcularCosto(productos){
    let sumatoriaCosto = 0;
    for(let producto of productos){
        sumatoriaCosto = sumatoriaCosto + producto.calcularCosto();
    }
    return sumatoriaCosto
}


function main(){
    let productos = agregarProductos();
    mostrarProductos(productos);
    console.log(productos);
    let costoAlmacen = calcularCosto(productos);
    alert("El costo total del almacen es de: "+ costoAlmacen);
}

main();