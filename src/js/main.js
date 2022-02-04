const items = document.querySelectorAll('.accordion-item')

const closeAllItems = () => {
  items.forEach((item) => item.classList.remove('accordion-item_opened'))
}

items.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('accordion-item_opened')) {
      item.classList.toggle('accordion-item_opened')
    } else {
      closeAllItems()
      item.classList.toggle('accordion-item_opened')
    }
  })
})
