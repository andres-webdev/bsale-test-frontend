import Services from './services/Services.js'
import UserInterface from './userInterface.js'

const { showProduct, showCategories } = new UserInterface()
const services = new Services()

const searchBar = document.getElementById('searchBar')
const nameProduct = document.getElementById('nameProduct')
const listCategories = document.getElementById('listCategories')
const orderByNameAsc = document.getElementById('orderByNameAsc')
const orderByNameDesc = document.getElementById('orderByNameDesc')
const orderByPriceAsc = document.getElementById('orderByPriceAsc')
const orderByPriceDesc = document.getElementById('orderByPriceDesc')
const btnDiscount = document.getElementById('btnDiscount')

// Mostrar todos los productos ordenados por nombre A - Z

async function showProductsByNameAsc () {
  const products = await services.getProducts()
  showProduct(products)
}

showProductsByNameAsc()

// Btn mostrar los productos oredenados por nombre A - Z

orderByNameAsc.addEventListener('click', () => {
  showProductsByNameAsc()
})

// Btn mostrar los productos oredenados por nombre Z - A

orderByNameDesc.addEventListener('click', () => {
  async function showProductsByNameDesc () {
    const products = await services.getProductsByNameDesc()
    showProduct(products)
  }
  showProductsByNameDesc()
})

// Btn mostrar los productos oredenados por menor precio

orderByPriceAsc.addEventListener('click', () => {
  async function showProductsByPriceAsc () {
    const products = await services.getProductsByPriceAsc()
    showProduct(products)
  }
  showProductsByPriceAsc()
})

// Btn mostrar los productos oredenados por mayor precio

orderByPriceDesc.addEventListener('click', () => {
  async function showProductsByPriceDesc () {
    const products = await services.getProductsByPriceDesc()
    showProduct(products)
  }
  showProductsByPriceDesc()
})

// Mostrar los productos que se ingresen a la barra de busqueda

searchBar.addEventListener('submit', (event) => {
  event.preventDefault()
  async function showProductsByName () {
    const products = await services.getProductsByName(nameProduct.value)
    showProduct(products)
  }
  showProductsByName()
})

// Mostrar productos por categoria

listCategories.addEventListener('click', (event) => {
  if (event.target.id === 'allProducts') {
    showProductsByNameAsc()
  } else {
    async function showProductsByCategory () {
      const products = await services.getProductsByCategory(event.target.id)
      showProduct(products)
    }
    showProductsByCategory()
  }
})

// Mostrar los productos en ofertas

btnDiscount.addEventListener('click', () => {
  async function showProductsByDiscount () {
    const products = await services.getProductsByDiscount()
    showProduct(products)
  }
  showProductsByDiscount()
})

// Lista para mostrar las categorias de los productos

const dataCategory = async () => {
  const listCategories = await services.getCategory()
  showCategories(listCategories)
}

dataCategory()
