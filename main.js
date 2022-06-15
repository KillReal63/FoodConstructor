import './style.css'

const body = document.getElementById('body')
const construct = document.getElementById('construct')

const openModal = () => {
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.addEventListener('click', () => closeModal)
  // modal.setAttribute('id', 'modal')
  closeModal(modal)
  body.appendChild(modal)
}

const closeModal = (modal) => {
  const close = document.createElement('button')
  const add = document.createElement('button')
  const spaceConstruct = document.createElement('div')
  close.classList.add('close')
  add.classList.add('add')
  spaceConstruct.classList.add('space-construct')
  close.innerText = 'Выход'
  add.innerText = 'Добавить'
  close.addEventListener('click', () => {
    body.removeChild(modal)
  })
  add.addEventListener('click', () => {
    body.removeChild(modal)
  })
  modal.appendChild(close)
  modal.appendChild(spaceConstruct)
  modal.appendChild(add)
}

construct.addEventListener('click', () => openModal())
