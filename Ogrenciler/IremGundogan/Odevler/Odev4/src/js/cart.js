import { http } from "./httpRequests.js";
import { ui } from "./ui.js";

const API_URL = "http://localhost:3000/cart";
const cart = document.getElementById("cart");

// Get initial blogs
getCartItems(API_URL);
async function getCartItems(url) {
  const res = await fetch(url);
  const data = await res.json();
  ui.showCartItems(data);
  setEvents();
  updateCartCount();
  return data;
}

const updateCartCount = function () {
  document.querySelector(".cart-value").textContent =
    document.querySelectorAll(".name h3").length;
};

function setEvents() {
  const minus = document.querySelectorAll(".minus");
  const plus = document.querySelectorAll(".plus");
  const deleteBtn = document.querySelectorAll(".deleteBtn");

  minus.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target.parentElement.querySelector(".quantity").textContent > 1) {
        e.target.parentElement.querySelector(".quantity").textContent--;
      }
    });
  });
  plus.forEach((element) => {
    element.addEventListener("click", (e) => {
      const stock = e.target.closest(".product").querySelector(".stock").value;
      let quantityCount = Number(
        e.target.closest(".product").querySelector(".quantity").textContent
      );
      if (stock > quantityCount) {
        e.target.parentElement.querySelector(".quantity").textContent++;
      } else {
        ui.showAlert("Not enough in stock", "danger");
      }
    });
  });
  document.querySelector(".checkout").addEventListener("click", () => {
    const products = document.querySelectorAll(".product");
    checkout(products);
    cart.innerHTML = `
    <div class="bg-secondary">
      <h3 class="text-warning ms-4">Your Cart</h3>
    </div>
    <hr />
    `;
  });

  function checkout(product) {
    product.forEach((element) => {
      const id = element.querySelector("[id]").dataset.id;
      const imageUrl = element.querySelector("img").src;
      const name = element.querySelector(".name h3").textContent;
      const price = element.querySelector(".price").textContent;
      let stock = element.querySelector(".stock").value;
      const category = element.querySelector(".category").value;
      const text = element.querySelector(".text").value;
      let quantity = element.querySelector(".quantity").textContent;
      let remainingStock = stock - quantity;
      remainingStock < 0 ? remainingStock = 0 : remainingStock;
      stock = remainingStock;
      // Create an object with the data
      const data = {
        name,
        price,
        stock,
        imageUrl,
        id,
        category,
        text,
      };
      if (remainingStock >= 0) {
        http
          .put(`http://localhost:3000/posts/${id}`, data)
          .then(() => {
            getCartItems(API_URL);
            updateCartCount();
          })
          .catch((err) => console.log(err));
        http
          .delete(`http://localhost:3000/cart/${id}`)
          .then(() => {
            ui.showAlert("have a magical day", "success");
            updateCartCount();
          })
          .catch((err) => console.log(err));
      }
    });
  }

  deleteBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target.id === "delete-post") {
        const id = e.target.dataset.id;

        if (confirm("Are u sure?")) {
          http
            .delete(`http://localhost:3000/cart/${id}`)
            .then(() => {
              ui.showAlert("Product deleted...", "danger");
              getCartItems(API_URL);
            })
            .catch((err) => console.log(err));
        }
        e.preventDefault();
      }
    });
  });
}
