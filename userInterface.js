import img from './img/no-product-image.png'

const showData = document.getElementById('showData')
const msgError = document.getElementById('msgError')
const listCategories = document.getElementById('listCategories')

class UserInterface {
  showProduct (products) {
    showData.innerHTML = ''
    msgError.innerHTML = ''
    if (products.length === 0) {
      msgError.innerHTML = '<h4 class="text-danger">Lo sentimos, no existe ningun producto con ese nombre. Intente nuevamente</h4>'
      return
    }
    products.forEach(({ name, url_image, price, discount }) => {
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
                      <img src="${url_image ? url_image : img}" class="card-img-top" alt="${name}" width="300px" height="220px">
                      ${discount ? htmlWithDiscount : htmlWithOutDiscount}
                    </div>`
      showData.innerHTML += html
    })
  }

  showCategories (categories) {
    categories.forEach(({ id, name }) => {
      const html = `<li><a id='${id}' class="dropdown-item text-capitalize" href="#">${name}</a></li>`
      listCategories.innerHTML += html
    })
  }
}

export default UserInterface
