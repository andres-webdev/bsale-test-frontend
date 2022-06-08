const showData = document.getElementById('showData');
const nameProduct = document.getElementById('nameProduct');
const listCategories = document.getElementById('listCategories');
const submitForm = document.getElementById('submit');

// Endpoints
const url = 'http://localhost:3000/api/products';

const url_categories = 'http://localhost:3000/api/category';

const dataProductsApi = async(url) => {

  try {
    const response = await fetch(url);
    const data = await response.json();
    showProduct(data);
  } catch (error) {
    console.log(error);
  }
};

// Mostrar todos los productos

dataProductsApi(url);

// Mostrar los productos que se ingresen a la barra de busqueda

nameProduct.addEventListener('input', (event) => {

  const urlSearch = `${url}/${event.target.value}`;
  
  dataProductsApi(urlSearch);
});

submitForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const urlSearch = `${url}/${nameProduct.value}`;
  
  dataProductsApi(urlSearch);
})

// Mostrar productos por categoria

listCategories.addEventListener('click', (event) => {

  if(event.target.id === 'allProducts'){
    
    dataProductsApi(url);
    
  } else{

    const urlCategoriesProducts = `${url_categories}/${event.target.id}`;

    dataProductsApi(urlCategoriesProducts);
  }
});

function showProduct(products) {

    showData.innerHTML = '';
    
    const showProducts = products.map(product => {

      const name = (product.name).toUpperCase();
      const price = '$' + new Intl.NumberFormat().format(product.price);
  
      const html = `<div class="card shadow mb-1 bg-body rounded me-3 p-2" style="width: 16.8rem;">
                        <img src="${product.url_image}" class="card-img-top" alt="${name}" width="300px" height="250px">
                        <div class="card-body">
                          <h5 class="card-title text-uppercase text-start">${name}</h5>
                          <p class="card-text text-end mb-4 fw-bold">${price}</p>
                          <a href="#" class="btn btn-success mx-auto position-absolute bottom-0 start-50 translate-middle-x w-75 my-2">Buy</a>
                        </div>
                    </div>`;
  
      showData.innerHTML += html;
    });
};


// Lista de Categorias

const dataCategoryApi = async(url) => {
  try {
    
    const response = await fetch(url);
    const data = await response.json();
    showCategories(data);

  } catch (error) {
    console.log(error);
  }
};

dataCategoryApi(url_categories);

function showCategories(categories){

  categories.map(({id, name}) => {

    const html = `<li><a id='${id}' class="dropdown-item text-capitalize" href="#">${name}</a></li>`;
    
    listCategories.innerHTML += html;
  });
}

