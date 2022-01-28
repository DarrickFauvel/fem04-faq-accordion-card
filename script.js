const items = document.querySelectorAll('.faq-item')

items.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active')
    } else {
      item.classList.add('active')
    }
  })
})
