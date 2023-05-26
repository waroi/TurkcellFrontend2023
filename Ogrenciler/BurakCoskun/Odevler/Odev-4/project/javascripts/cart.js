class Cart {
  addCart(productId) {
    request.get().then((products) => {
      const product = products.find((p) => p.id == productId);
      if (product) {
        cartRequest.get().then((data) => {
          const cartItem = data.find((cart) => cart.name === product.name);
          if (cartItem) {
            const updatedCart = {
              name: cartItem.name,
              price: cartItem.price,
              category: cartItem.category,
              image: cartItem.image,
              stock: cartItem.stock,
              count: cartItem.count + 1,
            };

            if (updatedCart.count > product.stock) {
              return ui.toastUI("Stock is not enough", "danger");
            }

            cartRequest
              .put(cartItem.id, updatedCart)
              .then((data) => {
                ui.cartUI();
              })
              .catch((err) => console.log(err));
          } else {
            const newCart = {
              name: product.name,
              price: product.price,
              category: product.category,
              image: product.image,
              stock: product.stock,
              count: 1,
            };
            cartRequest
              .post(newCart)
              .then((data) => {
                ui.cartUI();
                cartRequest.get().then((data) => {
                  shoppingCart.innerHTML = `
      <i class="fa-solid fa-cart-shopping text-primary fa-xl"></i>
      <span
      class="count text-white bg-danger text-center position-absolute rounded-circle"
      >${data.length}</span
    >
      `;
                });
              })
              .catch((err) => console.log(err));
          }
        });
      }
    });
  }
  decreaseCart(productId) {
    cartRequest.get().then((data) => {
      const cartItem = data.find((cart) => cart.id == productId);
      if (cartItem) {
        const updatedCart = {
          name: cartItem.name,
          price: cartItem.price,
          category: cartItem.category,
          image: cartItem.image,
          stock: cartItem.stock,
          count: cartItem.count - 1,
        };

        if (updatedCart.count < 1) {
          return cartRequest
            .delete(cartItem.id)
            .then((data) => {
              ui.cartUI();
            })
            .catch((err) => console.log(err));
        }

        cartRequest
          .put(cartItem.id, updatedCart)
          .then((data) => {
            ui.cartUI();
          })
          .catch((err) => console.log(err));
      }
    });
  }
  increaseCart(productId) {
    cartRequest.get().then((data) => {
      const cartItem = data.find((cart) => cart.id == productId);
      if (cartItem) {
        const updatedCart = {
          name: cartItem.name,
          price: cartItem.price,
          category: cartItem.category,
          image: cartItem.image,
          stock: cartItem.stock,
          count: cartItem.count + 1,
        };

        if (updatedCart.count > cartItem.stock) {
          return ui.toastUI("You can't add more than stock", "danger");
        }

        cartRequest
          .put(cartItem.id, updatedCart)
          .then((data) => {
            ui.cartUI();
          })
          .catch((err) => console.log(err));
      }
    });
  }
  buyCart() {
    cartRequest.get().then((data) => {
      const promises = data.map((cart) => {
        const product = {
          name: cart.name,
          price: cart.price,
          category: cart.category,
          image: cart.image,
          stock: cart.stock - cart.count,
        };
        return request.get().then((products) => {
          const productItem = products.find((p) => p.name == product.name);
          return request.put(productItem.id, product).then((data) => {
            return cartRequest.delete(cart.id);
          });
        });
      });

      Promise.all(promises)
        .then(() => {
          ui.toastUI("Your order has been received", "success");
          ui.cartUI();
          ui.addProductsFromDB();
        })
        .catch((err) => console.log(err));
    });
  }
}
