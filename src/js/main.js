const items = document.querySelectorAll('.accordion__item')

const closeAllItems = () => {
  items.forEach((item) => item.classList.remove('accordion__item_opened'))
}

items.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('accordion__item_opened')) {
      item.classList.toggle('accordion__item_opened')
    } else {
      closeAllItems()
      item.classList.toggle('accordion__item_opened')
    }
  })
})
