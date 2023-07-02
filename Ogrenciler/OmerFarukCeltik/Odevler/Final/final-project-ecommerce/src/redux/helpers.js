//  get functions
export const getUserData = async () => {
  const data = fetch("http://localhost:3006/users").then((response) =>
    response.json()
  );
  return data;
};

export const getCardData = async () => {
  const data = fetch("http://localhost:3007/users")
      .then((response) => response.json())
      return data;
  
} 

export const getData = async () => {
  const data = fetch("http://localhost:3005/products")
      .then((response) => response.json())
      return data;
} 

// sign up 
export const addNewUserWithSignUp = async (data) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3006/users", {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmpassword,
        isLoggedIn: data.isLoggedIn,
        isAdmin: data.isAdmin,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
// isloggedin
export const userIsLoggedInStatus = async (data) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3006/users/${data.id} `, {
      method: "PUT",
      body: JSON.stringify({
        id: data.id,
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmpassword,
        isLoggedIn: data.isLoggedIn,
        isAdmin: data.isAdmin,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
// delete product -only admin
export const deleteProductAdmin = async (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3005/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => resolve("Veri silindi."))
      .catch((err) => reject(err));
  });
};
//  edit product 
export const editProductDataAdmin = async (data) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3005/products/${data.id} `, {
      method: "PUT",
      body: JSON.stringify({
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
        rating: {
          rate: data.rate,
          count: Number(data.count),
        },
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
//  add product
export const addNewProductAdmin = async (data) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3005/products", {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
        rating: {
          rate: data.rate,
          count: Number(data.count),
        },
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
// add card to new product
export const postProductToCard = async (data) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3007/users`, {
      method: "POST",
      body: JSON.stringify({
        "id": data.id,
        "usercard":data.usercard
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

// update card product from card
export const refreshProductToCard = async (data) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3007/users/${data.id}`, {
      method: "PUT",
      body: JSON.stringify({
        "id": data.id,
        "usercard":data.usercard
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
// complete buy 

export const completeBuyFromProductDB = async (data) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3005/products/${data.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
        rating: {
          rate: data.rating.rate,
          count: Number(data.rating.count),
        },
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
// delete product from card
export const completeBuyActions= async (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3007/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => resolve("Veri silindi."))
      .catch((err) => reject(err));
  });
};