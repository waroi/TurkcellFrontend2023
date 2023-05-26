// class Product {
//     constructor(productName, price,stock,picture,category) {
//         this.productName= productName;
//         this.price= price;
//         this.stock=stock;
//         this.picture=picture;
//         this.category = category;
        
//     }
// }

// const createProduct = async (e) => {
//     e.preventDefault();

//     const productName = document.querySelector(".productName").value;
//     const price = document.querySelector(".price").value;
//     const stock = document.querySelector(".stock").value;
//     const picture = document.querySelector(".picture").value;
//     const category = document.querySelector('input[name="category"]:checked').value;


//     const product = new Product(productName,price,stock,picture,category);

//     await fetch('http://localhost:3000/products', {
//         method: 'POST',
//         body: JSON.stringify(product),
//         headers: { 'Content-Type': 'application/json' }
//     });

//     window.location.replace('/index.html');
// }
// // validation

// document.getElementById("productForm").addEventListener("submit", createProduct);

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()