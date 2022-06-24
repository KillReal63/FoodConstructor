import './style.css'

const body = document.getElementById('body')
const construct = document.getElementById('construct')

let products = [
  { productId: 1, productName: 'Булочка с кунжутом', categoryId: 1 },
  { productId: 2, productName: 'BBQ', categoryId: 2 },
  { productId: 3, productName: 'Моцарелла', categoryId: 3 },
  { productId: 4, productName: 'Курица', categoryId: 4 },
  { productId: 6, productName: 'Булочка румяная', categoryId: 1 },
  { productId: 7, productName: 'Тар-тар', categoryId: 2 },
  { productId: 8, productName: 'Пармезан', categoryId: 3 },
  { productId: 9, productName: 'Свинина', categoryId: 4 },
  { productId: 11, productName: 'Булочка пышная', categoryId: 1 },
  { productId: 12, productName: '1000 островов', categoryId: 2 },
  { productId: 13, productName: 'Гауда', categoryId: 3 },
  { productId: 14, productName: 'Говядина', categoryId: 4 },
]

let categories = [
  { categoryId: 1, categoryName: 'Булочки' },
  { categoryId: 2, categoryName: 'Соус' },
  { categoryId: 3, categoryName: 'Сыр' },
  { categoryId: 4, categoryName: 'Котлета' },
]

const openModal = () => {
  const modal = document.createElement('div')
  const spaceConstruct = document.createElement('div')
  modal.classList.add('modal')
  spaceConstruct.classList.add('space-construct')
  modal.addEventListener('click', () => closeModal)
  categories.filter(({ categoryId, categoryName }) => {
    const category = document.createElement('div')
    category.classList.add('category')
    category.innerText = categoryName
    spaceConstruct.appendChild(category)
    products.filter(({ categoryId: categoryId1, productName }) => {
      if (categoryId === categoryId1) {
        const components = document.createElement('button')
        components.classList.add('components-button')
        components.innerText = productName
        components.addEventListener('click', () => {
          const spaceConstruct = document.getElementById('constructor-space')
          spaceConstruct.appendChild(components)
        })
        spaceConstruct.appendChild(components)
      }
    })
  })
  closeModal(modal)
  modal.appendChild(spaceConstruct)
  body.appendChild(modal)
}

const closeModal = (modal) => {
  const add = document.createElement('button')
  add.classList.add('add')
  add.innerText = 'Готово'
  add.addEventListener('click', () => {
    body.removeChild(modal)
  })
  modal.appendChild(add)
}

construct.addEventListener('click', () => openModal())
