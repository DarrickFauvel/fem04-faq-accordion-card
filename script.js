const items = document.querySelectorAll('.accordion-item')

items.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('accordion-item_opened')) {
      item.classList.remove('accordion-item_opened')
    } else {
      item.classList.add('accordion-item_opened')
    }
  })
})
