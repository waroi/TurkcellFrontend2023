import Product from "./ProductClass.js";
import Cart from "./CartClass.js";
import Request from "./RequestClass.js";
import UI from "./UIClass.js";

let ui = new UI(false, null, null);

fetch("http://localhost:3000/product")
  .then((response) => response.json())
  .then((data) => {
    // JSON verisini kullanmak için buraya yerleştirilecek kodlar

    console.log(data);
    ui.screen(data);
  })
  .catch((error) =>
    console.error("JSON verisi alınırken bir hata oluştu:", error)
  );

productSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const product = new Product(
    productName.value,
    productPrice.value,
    productCategory.value,
    productImage.value,
    productStock.value
  );

  const request = new Request("http://localhost:3000/product");

  request
    .post({
      productName: product.name,
      productPrice: product.price,
      productCategory: product.category,
      productImage: product.image,
      productStock: product.stock
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  fetch("http://localhost:3000/product")
    .then((response) => response.json())
    .then((data) => {
      // JSON verisini kullanmak için buraya yerleştirilecek kodlar
      const productArray = data.product;
      ui.screen(productArray);
    })
    .catch((error) =>
      console.error("JSON verisi alınırken bir hata oluştu:", error)
    );

    
});

search.addEventListener("input", function (e) {
  e.preventDefault();
  fetch("http://localhost:3000/product")
    .then((response) => response.json())
    .then((data) => {
      // JSON verisini kullanmak için buraya yerleştirilecek kodlar

      console.log(data);
      ui.screen(data);
    })
    .catch((error) =>
      console.error("JSON verisi alınırken bir hata oluştu:", error)
    );
});

mfFilter.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.id != "mfFilter") {
    ui.filterTur = e.target.innerText;
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => {
        // JSON verisini kullanmak için buraya yerleştirilecek kodlar

        console.log(data);
        ui.screen(data);
      })
      .catch((error) =>
        console.error("JSON verisi alınırken bir hata oluştu:", error)
      );
  }
});

msName.addEventListener("click", function (e) {
  e.preventDefault();
  

  if (e.target.id == "msNameAsc") {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => {
        // JSON verisini kullanmak için buraya yerleştirilecek kodlar
        
        data.sort((a, b) => {
          return a.productName.localeCompare(b.productName); // Sıralama için "localeCompare" kullanılır
        });
        ui.screen(data);
      })
      .catch((error) =>
        console.error("JSON verisi alınırken bir hata oluştu:", error)
      );
    // var sortedBooks = kitaplar
    //   .filter((kitap) => {
    //     return kitap.ad;
    //   })
    //   .sort((a, b) => {
    //     return a.ad.localeCompare(b.ad); // Sıralama için "localeCompare" kullanılır
    //   });
  }
  if (e.target.id == "msNameDesc") {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => {
        // JSON verisini kullanmak için buraya yerleştirilecek kodlar
        
        data.sort((a, b) => {
          return b.productName.localeCompare(a.productName); // Sıralama için "localeCompare" kullanılır
        });
        ui.screen(data);
      })
      .catch((error) =>
        console.error("JSON verisi alınırken bir hata oluştu:", error)
      );
    // var sortedBooks = kitaplar
    //   .filter((kitap) => {
    //     return kitap.ad;
    //   })
    //   .sort((a, b) => {
    //     return a.ad.localeCompare(b.ad); // Sıralama için "localeCompare" kullanılır
    //   });
  }
});

msPrice.addEventListener("click", function (e) {
  e.preventDefault();
  

  if (e.target.id == "msPriceAsc") {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => {
        // JSON verisini kullanmak için buraya yerleştirilecek kodlar
        
        data.sort((a, b) => {
          return a.productPrice.localeCompare(b.productPrice); // Sıralama için "localeCompare" kullanılır
        });
        ui.screen(data);
      })
      .catch((error) =>
        console.error("JSON verisi alınırken bir hata oluştu:", error)
      );
    // var sortedBooks = kitaplar
    //   .filter((kitap) => {
    //     return kitap.ad;
    //   })
    //   .sort((a, b) => {
    //     return a.ad.localeCompare(b.ad); // Sıralama için "localeCompare" kullanılır
    //   });
  }
  if (e.target.id == "msPriceDesc") {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => {
        // JSON verisini kullanmak için buraya yerleştirilecek kodlar
        
        data.sort((a, b) => {
          return b.productPrice.localeCompare(a.productPrice); // Sıralama için "localeCompare" kullanılır
        });
        ui.screen(data);
      })
      .catch((error) =>
        console.error("JSON verisi alınırken bir hata oluştu:", error)
      );
    // var sortedBooks = kitaplar
    //   .filter((kitap) => {
    //     return kitap.ad;
    //   })
    //   .sort((a, b) => {
    //     return a.ad.localeCompare(b.ad); // Sıralama için "localeCompare" kullanılır
    //   });
  }
});

// window.addEventListener("click", function(e) {
//   if (e.target.parentElement.id === "addCart") {
//     const productInfoName = e.target.parentElement.parentElement.querySelector("#productInfoName").innerHTML;
//     const productInfoPrice = e.target.parentElement.parentElement.querySelector("#productInfoPrice").innerHTML;
//     const productInfoCategory = e.target.parentElement.parentElement.querySelector("#productInfoCategory").innerHTML;
//     const productInfoImage = e.target.parentElement.parentElement.querySelector("#productInfoImage").src;
//     const productInfoStock = e.target.parentElement.parentElement.querySelector("#productInfoStock").innerHTML;

//     console.log(productInfoImage.value)
//     const cart = new Cart(
//       productInfoName.innerHTML,
//       productInfoPrice.innerHTML,
//       productInfoCategory.innerHTML,
//       productInfoImage.src,
//       productInfoStock.innerHTML
//     );
    
//     const requestCart = new Request("http://localhost:3000/cart");
//     requestCart
//       .post({
//         cartProductName: cart.name,
//         cartProductPrice: cart.price,
//         cartProductCategory: cart.category,
//         cartProductImage: cart.image,
//         cartProductStock: cart.stock
//       })
//       .then((data) => console.log("Cart: " + data))
//       .catch((err) => console.log(err));
//   }
// });

// window.addEventListener("click", function (e){
//   e.preventDefault();
  
//   if(e.target.parentElement.id== "addCart"){
    
//     const cart = new Cart(
//       e.target.parentElement.parentElement.children[0].innerText,
//       e.target.parentElement.parentElement.children[1].innerText,
//       e.target.parentElement.parentElement.children[2].innerText,
//       e.target.parentElement.parentElement.children[3].innerText,
//       e.target.parentElement.parentElement.children[4].innerText
//     );
//     const requestCart = new Request("http://localhost:3000/cart");
//     requestCart
//       .post(
//         {
//           cartProductName: cart.name,
//           cartProductPrice: cart.price,
//           cartProductCategory: cart.category,
//           cartProductImage: cart.image,
//           cartProductStock: cart.stock
//         }
//       )
//       .then((data) => console.log("Cart: " +data))
//       .catch((err) => console.log(err));
//   }
// })


