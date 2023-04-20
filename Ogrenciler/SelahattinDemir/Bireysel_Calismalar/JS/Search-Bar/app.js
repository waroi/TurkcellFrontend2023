// arrow function
const searchProduct = () => {
  let searchBar = document.getElementById("search").value.toUpperCase(); // search bar'a girilen değer alındı. (value) ve büyük harfe çevrildi. (toUpperCase)
  let store = document.getElementById("products"); // bütün productları içeren div alındı.
  let product = document.querySelectorAll(".card"); // bütün productları içeren div içerisindeki card class'ına sahip divler alındı.
  let productTitle = store.getElementsByTagName("h2"); // bütün productları içeren store class içerisindeki product class'ına sahip divler içerisindeki text-dark class'ına sahip divler alındı.

  for (let i = 0; i < productTitle.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0]; // product içerisindeki divlerin h2 değerleri alındı.
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBar) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

// for (let i = 0; i < productTitle.length; i++) {
//   let match = product[i].getElementsByTagName("h2")[0]; // productTitle içerisindeki her bir div'in içerisindeki text alındı.
//   if (match.toUpperCase().indexOf(searchBar) > -1) {
//     // eğer searchBar içerisindeki değer productTitle içerisindeki değerlerden biri ile eşleşiyorsa
//     product[i].style.display = ""; // product div'lerinin hepsi görünür hale getirildi.
//   } else {
//     product[i].style.display = "none"; // eşleşen değer yoksa product div'lerinin hepsi görünmez hale getirildi.
//   }
// }
