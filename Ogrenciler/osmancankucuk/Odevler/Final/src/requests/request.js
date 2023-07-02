import { checkUserExist } from "../middlewares/userMiddlewares";
import DefaultImage from "../img/DefaultImage.png";
export class Request {
  async getData() {
    const respons = await fetch("http://localhost:3004/data");
    const responsData = await respons.json();

    return responsData;
  }

  async getRandomDatas(id) {
    const data = await this.getData();
    const filterData = data.filter((product) => product.id !== id);
    const shuffleData = this.perfectShuffle(filterData);

    return shuffleData.slice(0, 8);
  }
  perfectShuffle(data) {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }

  async signUpUser(data) {
    const respons = await fetch("http://localhost:3004/users");
    const users = await respons.json();
    let result = users.find((user) => user.email === data.email);

    if (result === undefined) {
      await fetch("http://localhost:3004/users", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          role: "user",
          image: DefaultImage,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      return true;
    }
    return false;
  }
  async signInUser(data) {
    return checkUserExist(data).then(async (res) => {
      if (res !== false) {
        if (res.password === data.password) {
          localStorage.setItem(
            "isAuth",
            JSON.stringify({
              isOnline: true,
              user: res.id,
              name: res.name,
              role: res.role,
            })
          );
          localStorage.setItem(
            "cartItems",
            JSON.stringify(res.cart?.cart ? res.cart?.cart : [])
          );
          return true;
        } else {
          return "incorrect-password";
        }
      } else {
        return "no-user";
      }
    });
  }
  async getUserInfo() {
    let id = JSON.parse(localStorage.getItem("isAuth"));

    const respons = await fetch(`http://localhost:3004/users/${id.user}`);
    const users = await respons.json();

    return users;
  }
  async getDataInfo(id) {
    const respons = await fetch(`http://localhost:3004/data/${id}`);
    const data = await respons.json();
    return data;
  }
  async buyProducts() {
    let carts = JSON.parse(localStorage.getItem("cartItems"));

    await carts.map(async (cart) => {
      cart.rating.count -= cart.quantity;
      cart.quantity = 0;

      await fetch(`http://localhost:3004/data/${cart.id}`, {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
          "Content-type": "application/json",
        },
      });
    });
    const userId = JSON.parse(localStorage.getItem("isAuth")).user;
    const user = await this.getUserInfo();

    await fetch(`http://localhost:3004/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ ...user, cart: [] }),
      headers: {
        "Content-type": "application/json",
      },
    });
    localStorage.setItem("cartItems", JSON.stringify([]));
    window.location.reload();
  }

  async getCart() {
    const userInfo = await this.getUserInfo();
    return userInfo.cart;
  }
  async editDataAsAdmin(data, id) {
    const response = await fetch(`http://localhost:3004/data/${id}`);
    const oldData = await response.json();

    const newData = { ...oldData, ...data };

    await fetch(`http://localhost:3004/data/${id}`, {
      method: "PUT",
      body: JSON.stringify({ ...newData }),
      headers: {
        "Content-type": "application/json",
      },
    });
    return newData;
  }

  async userPreviousCart(cart) {
    const user = await this.getUserInfo();

    await fetch(`http://localhost:3004/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...user, cart: { ...user.cart, cart } }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}
