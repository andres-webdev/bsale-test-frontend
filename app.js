const showData = document.getElementById('showData')
const nameProduct = document.getElementById('nameProduct')
const listCategories = document.getElementById('listCategories')
const orderByNameAsc = document.getElementById('orderByNameAsc')
const orderByNameDesc = document.getElementById('orderByNameDesc')
const orderByPriceAsc = document.getElementById('orderByPriceAsc')
const orderByPriceDesc = document.getElementById('orderByPriceDesc')
const btnDiscount = document.getElementById('btnDiscount')
const msgError = document.getElementById('msgError')

// Endpoints
const url = 'http://localhost:3000/api/products'
const urlCategory = 'http://localhost:3000/api/category'

const dataProductsApi = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    showProduct(data)
  } catch (error) {
    console.log(error)
  }
}

// Mostrar todos los productos ordenados por nombre A - Z

dataProductsApi(url)

// Btn mostrar los productos oredenados por nombre A - Z

orderByNameAsc.addEventListener('click', () => {
  dataProductsApi(url)
})

// Btn mostrar los productos oredenados por nombre Z - A

orderByNameDesc.addEventListener('click', () => {
  const urlProductOrderByName = `${url}/order/Z-A`
  dataProductsApi(urlProductOrderByName)
})

// Btn mostrar los productos oredenados por menor precio

orderByPriceAsc.addEventListener('click', () => {
  const urlProductByLowerPrice = `${url}/order/lowerprice`
  dataProductsApi(urlProductByLowerPrice)
})

// Btn mostrar los productos oredenados por mayor precio

orderByPriceDesc.addEventListener('click', () => {
  const urlProductByHigherPrice = `${url}/order/higherprice`
  dataProductsApi(urlProductByHigherPrice)
})

// Mostrar los productos que se ingresen a la barra de busqueda

nameProduct.addEventListener('input', (event) => {
  const urlSearch = `${url}/${event.target.value}`
  dataProductsApi(urlSearch)
})

// Mostrar productos por categoria

listCategories.addEventListener('click', (event) => {
  if (event.target.id === 'allProducts') {
    dataProductsApi(url)
  } else {
    const urlCategoriesProducts = `${urlCategory}/${event.target.id}`
    dataProductsApi(urlCategoriesProducts)
  }
})

// Mostrar los productos en ofertas

btnDiscount.addEventListener('click', () => {
  const urlProductsByDiscount = `${url}/order/discount`
  dataProductsApi(urlProductsByDiscount)
})

function showProduct (products) {
  showData.innerHTML = ''
  msgError.innerHTML = ''

  if (products.length === 0) {
    msgError.innerHTML = '<h4 class="text-danger">Lo sentimos, no existe ningun producto con ese nombre. Intente nuevamente</h4>'
    return
  }

  products.forEach(({ name, url_image, price, discount }) => {
    const url = url_image ? url_image : './img/no-product-image.png'
    const priceWithDiscount = '$' + new Intl.NumberFormat().format(price - (price * (discount / 100)))
    const priceFormated = '$' + new Intl.NumberFormat().format(price)
    const htmlWithDiscount = `<div class="card-body">
                                  <h5 class="card-title text-capitalize text-start fs-5" style="height: 2.5rem">${name.toLowerCase()}</h5>
                                  <div class="bg-danger bg-opacity-50 border border-danger border-start-0 rounded mb-2 px-1" style="width: 68%">
                                    Descuento de ${discount}%
                                  </div>
                                  <div class="d-flex justify-content-around">
                                    <p class="card-text text-end fw-bold" style="font-size: 1.5rem">${priceWithDiscount}</p>
                                    <p class="card-text text-end text-decoration-line-through me-1" style="font-size: .9rem">${priceFormated}</p>
                                    <a href="#" class="btn btn-success" style="width: 5.8rem; height: 2.5rem">Comprar</a>
                                  </div>
                                </div>`

    const htmlWithOutDiscount = `<div class="card-body">
                                    <h5 class="card-title text-capitalize text-start fs-5" style="height: 5rem">${name.toLowerCase()}</h5>
                                    <div class="d-flex justify-content-around">
                                      <p class="card-text text-end fw-bold" style="font-size: 1.5rem">${priceFormated}</p>
                                      <a href="#" class="btn btn-success" style="width: 7rem; height: 2.5rem">Comprar</a>
                                    </div>
                                   </div>`

    const html = `<div class="card shadow mb-1 bg-${discount ? 'warning' : 'light'} rounded me-3 p-2" style="width: 16.8rem;">
                    <img src="${url}" class="card-img-top" alt="${name}" width="300px" height="220px">
                    ${discount ? htmlWithDiscount : htmlWithOutDiscount}
                  </div>`

    showData.innerHTML += html
  })
}

// Lista de Categorias

const dataCategoryApi = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    showCategories(data)
  } catch (error) {
    console.log(error)
  }
}

dataCategoryApi(urlCategory)

function showCategories (categories) {
  categories.forEach(({ id, name }) => {
    const html = `<li><a id='${id}' class="dropdown-item text-capitalize" href="#">${name}</a></li>`
    listCategories.innerHTML += html
  })
}
