  let productosCarro = [];
  
  if (localStorage.getItem("productos")) {
    productosCarro = JSON.parse(localStorage.getItem("productos"));
    // console.log(productosCarro);
    actualizarCarro(productosCarro);
  }

/*   if (localStorage.getItem("productos_2")) {
    productosCarro = JSON.parse(localStorage.getItem("productos_2"));
    // console.log(productosCarro);
    actualizarCarro(productosCarro); */
  



  
  // cargarProductos(productos); original 
  
  //FUNCION ENCARGADA DE CARGAR PRODUCTOS

  //Productos corresponde a un arreglo de todos los libros
  
  // categoriaSuperacion(productos); // Esta función debe decir si un registro es de la categoría superación

  // console.log(productos);


  // function categoriaSuperacion(elemento){
    // console.log(elemento[2]); //muestra el tercer registro completo (0,1,2)

    // console.log(elemento[2].descripcion); retorna la descripccion
/*       for (var i=0 ; i < elemento.l; i++ ){

          matSupera

      } */
          


    // if (elemento.descripcion == "Categoría: Misterio."){
      // console.log(elemento[0]);
      // producto;
    // };
    // else() {false};
  
    //let acumulador = ""; // PROBANDO

    let acumulador = ""; 

    let libMisterio = productos.filter(libro=>libro.descripcion=="Misterio");

    // document.write("<h2>LIBROS DE MISTERIO</h2>");
    // document.write("LIBROS DE MISTERIO");

    cargarProductosMisterio(libMisterio);

    let libSupera = productos.filter(libro=>libro.descripcion=="Superación personal");

    // document.write("<h2>LIBROS DE SUPERACIÓN PERSONAL</h2>");
/*     document.write("LIBROS DE SUPERACIÓN PERSONAL"); */

    cargarProductosSupera(libSupera); 

  function cargarProductosSupera(listadoProductos) {
  
      // let acumulador = ""; // PROBANDO

       listadoProductos.forEach((producto) => {   

          let template = `

                  <div class="col-12 col-md-6 col-lg-4">
                      
                      <div class="card m-auto my-3" style="width: 18rem;">
                          <img src="${producto.imagen}" class="card-img-top" alt="${
            producto.nombre
          }">
                          <div class="card-body">
                          <h5 class="card-title">${producto.nombre}</h5>
                          <p class="card-text">${producto.descripcion}</p>
                          <p class="card-text">Precio Normal: $ ${producto.precio}</p>
                          <p class="card-text text-danger">Descuento: -  $ ${
                            producto.descuento
                          }</p>

                          <p class="card-text text-success">Precio final: $ ${
                            producto.precio - producto.descuento
                          }</p>

                          <a class="btn btn-primary" data-sku="${
                            producto.sku
                          }" onclick="addToCart('${producto.sku}')">Comprar</a>


                          <a class="btn btn-primary" data-sku="${
                            producto.sku
                          }" onclick="resLibro('${producto.sku}')">Resumen Libro</a>



                          </div>
                      </div>
                  </div>
              `;
          acumulador += template;
          });
    
          
          document.querySelector("#productos .row").innerHTML = acumulador;

       
  }


  // cargarProductosSupera(libSupera); 

  function cargarProductosMisterio(listadoProductos) {
  
      // let acumulador = ""; // PROBANDO

       listadoProductos.forEach((producto) => {   




          let template = `

                  <div class="col-12 col-md-6 col-lg-4">
                      
                      <div class="card m-auto my-3" style="width: 18rem;">
                          <img src="${producto.imagen}" class="card-img-top" alt="${
            producto.nombre
          }">
                          <div class="card-body">
                          <h5 class="card-title">${producto.nombre}</h5>
                          <p class="card-text">${producto.descripcion}</p>
                          <p class="card-text">Precio Normal: $ ${producto.precio}</p>
                          <p class="card-text text-danger">Descuento: -  $ ${
                            producto.descuento
                          }</p>

                          <p class="card-text text-success">Precio final: $ ${
                            producto.precio - producto.descuento
                          }</p>

                          <a class="btn btn-primary" data-sku="${
                            producto.sku
                          }" onclick="addToCart('${producto.sku}')">Comprar</a>


                          <a class="btn btn-primary" data-sku="${
                            producto.sku
                          }" onclick="resLibro('${producto.sku}')">Resumen Libro</a>



                          </div>
                      </div>
                  </div>
              `;
          acumulador += template;
          });
    
          
          document.querySelector("#productos .row").innerHTML = acumulador;

       
  }








// Preparando pantalla de detalle de libro 

  function resLibro(sku){
    // alert("pantalla de resumen de libro " + sku);
    // window.location.href = "../detalle_lib.html"; funciona para cargar detalle_lib.html

    window.location.href = "../detalle_lib.html?option=libro&codigo=lib_" + sku ;


    // window.location.href = "../detalle_lib.html?option=libro&codigo=lib_001"; // Probando con código fijo

// <a class="nav-link" href="./login.html">Login</a>

//"./detalle_lib.html?option=libro&codigo=lib_015"

  }
  
//******************************************************************************** */
  function addToCart(sku) {
    let objProducto = {
      sku,
      cantidad: 1,
    };
  
    let productoEncontrado = productosCarro.find(
      (producto) => producto.sku == sku
    );
    if (productoEncontrado) {
      productoEncontrado.cantidad = productoEncontrado.cantidad + 1;
    } else {
      productosCarro.push(objProducto);
    }
  
    actualizarCarro(productosCarro);
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado correctamente.',
      showConfirmButton: false,
      timer: 1500
    })

  }
  
  function actualizarCarro(listadoProductos) {
    localStorage.setItem("productos", JSON.stringify(listadoProductos));
  
    const valorInicial = 0;
    const sumaProductos = listadoProductos.reduce(
      (accumulator, producto) => accumulator + producto.cantidad,
      valorInicial
    );
  
    document.querySelector("#cantidad-productos").innerText = sumaProductos;
  }
  