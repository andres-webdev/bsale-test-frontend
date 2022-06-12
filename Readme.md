# Bsale Test - Andrés Márquez

  [Dashboard](https://bsale-test-andres-marquez.herokuapp.com/)

## Documentación del Frontend

### Bootstrap 5

- Para el estilo se utilizaron componentes de la libreria de Bootstrap 5
- Se utilizaron los componentes para la barra de navegación y un menu simple.
<center><img src="/img/navBar.png" alt="navBar"/></center>

- Se encuentra boton 'Categorias', que muestra los nombres de las categorias para poder buscar todos los productos pertenecientes a ella. 
<center><img src="/img/categoriesList.png" alt="categoriesList"/></center>

- El boton 'Ordenar' donde se encuentran las opciones para ordenar los productos. 
<center><img src="/img/orderProducts.png" alt="orderProducts"/></center>

- El boton 'Ofertas' para mostrar los productos con descuento. 
<center><img src="/img/ofertas.png" alt="ofertas"/></center>

- Y por ultimo tiene una barra de busqueda donde puedes ingresar el nombre que deseas buscar caso contrario muestra un mensaje de error.
<center><img src="/img/searchProduct.png" alt="searchProduct"/></center>

Mensaje de rror: 
<center><img src="/img/product-not-found.png" alt="product-not-found"/></center>


### API y Logica

- Para la obtener la información de la base de datos se utilizo la [RESTAPI-Bsale-test-Andrés-Márquez](https://github.com/andres-webdev/bsale-test-backend)

- Utilizando los endpoints correspondientes de la api.

- Se creo el archivo Services.js para manejar las peticiones y respuestas de la api, a traves de promesas y async y await.

- Y por ultimo el archivo userInteface.js muestra la información obtenida desde la api en el DOM de manera uniforme. 

### Dashboard
<center><img src="/img/products.png" alt="products"/></center>
