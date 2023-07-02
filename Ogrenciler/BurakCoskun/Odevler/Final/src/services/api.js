class Products {
  static async getAll() {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
  static async getOne(id) {
    const response = await fetch(`http://localhost:3001/products/${id}`);
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
  static async editOne(id, product) {
    const response = await fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
}

class Users {
  static async getAll() {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
  static async getOne(id) {
    const response = await fetch(`http://localhost:3001/users/${id}`);
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
  static async createOne(user) {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
}

class Carts {
  static async getAll() {
    const response = await fetch("http://localhost:3001/carts");
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
  static async getOne(userId) {
    const response = await fetch(
      `http://localhost:3001/carts?userId=${userId}`
    );
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }

  static async createOne(cart) {
    if (cart.length === 0) {
      return "404";
    }
    const pushCart = cart[0];
    const existingCart = await this.getOne(pushCart.userId);

    if (existingCart.length > 0) {
      const response = await fetch(
        `http://localhost:3001/carts/${existingCart[0].id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pushCart),
        }
      );
      const data = await response.json();
      if (response.status !== 200) {
        return "404";
      }
      return data;
    }

    const response = await fetch("http://localhost:3001/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pushCart),
    });

    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }

  static async editOne(id, cart) {
    const response = await fetch(`http://localhost:3001/carts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
  static async removeCart(id) {
    const response = await fetch(`http://localhost:3001/carts/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
}

export { Products, Users, Carts };
