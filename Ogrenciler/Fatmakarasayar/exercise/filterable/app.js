(function () {
  const buttons = document.querySelectorAll('.btn')
  const storeImages = document.querySelectorAll('.store-item')

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const filter = e.target.dataset.filter
      console.log(filter)
      storeImages.forEach((item) => {
        console.log(item.classList[1])
        if (filter === 'all') {
          item.style.display = 'block'
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = 'block'
          }
          else {
            item.style.display = 'none'
          }
        }
      })
    })
  })


})();