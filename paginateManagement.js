const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

//64130500031 Tanapat Daoloy
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const getItem = getItemsOfCurrentPage(products,currentPageNumber,rowsPerPage)
    getItem.forEach(element => {
      const getli = document.createElement('li')
      getli.textContent = `ID:${element.id}, NAME:${element.name}`
      document.getElementById('products').appendChild(getli)
    });
  }

  const pageHandler = (event) => {
    let getTarget;
    if(event){
      getTarget = event.target.id
    } else {
      getTarget = 1
    }
    const getData = document.getElementById('products')
    const getButtonList = Array.from(document.getElementsByTagName('button'))
    getButtonList.forEach(element => {
      if(getTarget == element.id){
        element.style = 'background-color: LightSteelBlue'
      } else {
        element.style = 'border: 1px solid #999'
      }
    });
    getData.textContent = ''
    showItemsOfCurrentPage(getTarget)

    
  } 

  const showPageNumbers = () => {
    const getTotalPage = getTotalPages(products,rowsPerPage)
    for(let i=1 ; i<=getTotalPage ; i++){
      const getButton = document.createElement('button')
      getButton.setAttribute('id',i)
      getButton.textContent = i
      getButton.addEventListener('click',pageHandler)
      document.querySelector('.pagination').appendChild(getButton)
    }
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
module.exports = paginateManagement
// export { paginateManagement }
// const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()





// const { template } = require('@babel/core')
// // import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// // import { products } from './data/products.js'

// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

// //your student id, firstname, and lastname here
// //64130500017 Naronkrach Tanajarusawas
// function paginateManagement(items, rows) {
//   const rowsPerPage = rows
//   const products = items

//   const showItemsOfCurrentPage = (currentPageNumber) => {

//     const pageItems = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
//     const productsUl = document.getElementById("products")

//     pageItems.forEach((item) => {
//       const newLi = document.createElement("li")
//       newLi.textContent = `ID:${item.id}, NAME:${item.name}`

//       productsUl.appendChild(newLi)
//     })


//   }

//   const pageHandler = (event) => {
//     let targetID;
//     if (event) {
//       targetID = event.target.id
//     } else {
//       targetID = 1
//     }
//     const productsUl = document.getElementById("products")

//     const btnList = Array.from(document.getElementsByTagName("button"))
//     // btn.style = 'border: 1px solid #999'
//     btnList.forEach(btn => {
//       if (btn.id == targetID) {
//         btn.style = 'background-color: LightSteelBlue'
//       } else {
//         btn.style = 'border: 1px solid #999'
//       }
//     })

//     productsUl.innerHTML = ""
//     showItemsOfCurrentPage(targetID)

//   }

//   const showPageNumbers = () => {
//     const totalPages = getTotalPages(items, rowsPerPage) //int
//     let i = 0;

//     while (i < totalPages) {

//       const newBtn = document.createElement("button")
//       newBtn.textContent = i + 1;
//       newBtn.setAttribute("id", i + 1)
//       newBtn.addEventListener("click", pageHandler)
//       document.getElementsByClassName("pagination")[0].appendChild(newBtn);
//       i++;
//     }
//   }

//   return {
//     showPageNumbers,
//     pageHandler
//   }
// }
// module.exports = paginateManagement
// // export { paginateManagement }
// // const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
// // showPageNumbers()
// // pageHandler()
