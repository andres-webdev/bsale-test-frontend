const URL_PRODUCTS = 'https://bsale-test-andres-marquez.herokuapp.com/api/products'
const URL_CATEGORY = 'https://bsale-test-andres-marquez.herokuapp.com/api/category'

class Services {
  async getProducts () {
    try {
      const response = await fetch(URL_PRODUCTS)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async getProductsByNameDesc () {
    try {
      const response = await fetch(`${URL_PRODUCTS}/order/Z-A`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async getProductsByPriceAsc () {
    try {
      const response = await fetch(`${URL_PRODUCTS}/order/lowerprice`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async getProductsByPriceDesc () {
    try {
      const response = await fetch(`${URL_PRODUCTS}/order/higherprice`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async getProductsByCategory (categoryId) {
    try {
      const response = await fetch(`${URL_PRODUCTS}/category/${categoryId}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async getProductsByName (productName) {
    try {
      const response = await fetch(`${URL_PRODUCTS}/${productName}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async getProductsByDiscount () {
    try {
      const response = await fetch(`${URL_PRODUCTS}/order/discount`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async getCategory () {
    try {
      const response = await fetch(URL_CATEGORY)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export default Services
