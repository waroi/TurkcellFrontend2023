(function() {
  const buttons = document.querySelectorAll('.form-check-label');
  const products = document.querySelectorAll('.cvc123');

  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      const filter = e.currentTarget.dataset.filter;
      console.log(filter);
      products.forEach(function(product) {
        if (filter === 'all') {
          product.style.display = 'block';
        } else {
          if (product.classList.contains(filter)) {
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        }
      });
    });
  });

})();