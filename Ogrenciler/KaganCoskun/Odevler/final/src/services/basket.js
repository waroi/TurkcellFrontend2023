import { getAllProducts } from "./requests";

export const createBasket = async (userId) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/basket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id:self.crypto.randomUUID(), userId: userId, prod: [] }),
    });
  
    return await response.json();
  };

export const getBasketItems = async (id) => {
  const products = await getAllProducts();
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/basket?userId=${id}`
  );
  const basket = await response.json();
  const basketItems = basket[0]?.prod?.map((item) => {
    const productMatch = products?.find(
      (product) => product.id === item.productId
    );
    return {
      product: productMatch,
      quantity: item.quantity,
    };
  });
  return basketItems;
};

export const addItemToBasket = async (userId, newProduct) => {
  let error;


  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
  );
  const basket = await response.json();

  const existingProduct = basket[0].prod.find(
    (item) => item.productId === newProduct.productId
  );

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/products/${newProduct.productId}`
  );
  const stock = await res.json();

  if (existingProduct) {
    if (existingProduct.quantity + newProduct.quantity > stock.rating.count) {
        existingProduct.quantity = stock.rating.count;
        error = "Maximum stock reached, maximum stock quantity added to your cart"
    }
    else{
        existingProduct.quantity += newProduct.quantity;
    }
  } 
  else {
    basket[0].prod.push(newProduct);
  }


  const updateResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(basket[0]),
    }
  );

  const updatedBasket = await updateResponse.json();
  return error?error:updatedBasket;
};

export const removeItemFromBasket = async (userId, productId) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
  );
  const basket = await response.json();

  const updatedBasket = basket[0].prod.filter(
    (item) => item.productId !== productId
  );

  const updateResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prod: updatedBasket }),
    }
  );

  return await updateResponse.json();
};

export const updateItemQuantity = async (userId, productId, quantity) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
  );
  const basket = await response.json();

  const updatedBasket = basket[0].prod.map((item) => {
    if (item.productId === productId) {
      return {
        ...item,
        quantity: quantity,
      };
    } else {
      return item;
    }
  });

  const updateResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prod: updatedBasket }),
    }
  );

  const updatedBasketResponse = await updateResponse.json();
  return updatedBasketResponse;
}

export const deleteById = async (userId, productId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
    );
    const basket = await response.json();
  
    const updatedBasket = basket[0].prod.filter(item => item.productId !== productId);
  
    const updateResponse = await fetch(
      `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prod: updatedBasket }),
      }
    );
  
    return await updateResponse.json();
  };
  

export const clearBasket = async (userId) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
  );
  const basket = await response.json();

  const updateResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prod: [] }),
    }
  );

  const updatedBasketResponse = await updateResponse.json();
  return updatedBasketResponse;
};

export const checkout = async (userId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
    );
    const basket = await response.json();
  
    const stockDrop = async (productId, quantity) => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${productId}`
      );
      const product = await res.json();
      const newStock = product.rating.count - quantity;
      if (newStock < 0 || product.rating.count === 0) {
        return `Not enough stock for product: ${product.title}`;
      }
      await fetch(
        `${import.meta.env.VITE_API_URL}/products/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rating: { count: newStock,rate:product.rating.rate } }),
        }
      );
      return null;
    };
  
    let errorMessages = [];
    for (let item of basket[0].prod) {
      const errorMessage = await stockDrop(item.productId, item.quantity);
      if (errorMessage) {
        errorMessages.push(errorMessage);
      }
    }
  
    const removeBasket = await fetch(
      `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prod: [] }),
      }
    );
  
    return { 
      success: errorMessages.length === 0, 
      basket: await removeBasket.json(),
      messages: errorMessages,
    };
  }
  
  export const getBasketLenght = async (userId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
    );
    const basket = await response.json();
    const basketLenght =await basket[0].prod?.length;
    return basketLenght;
  };
  
