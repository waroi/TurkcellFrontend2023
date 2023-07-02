class APIRequest {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  fetchData = async () => {
    try {
      const response = await fetch(this.endpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  postData = async (newData) => {
    try {
      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  updateData = async (id, updatedData) => {
    try {
      const response = await fetch(`${this.endpoint}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteData = async (id) => {
    try {
      const response = await fetch(`${this.endpoint}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export default APIRequest;

// const endpoint = "https://fakestoreapi.com/products";
// const api = new APIRequest(endpoint);

// // GET isteği
// api
//   .fetchData()
//   .then((data) => {
//     console.log("GET Response:", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // POST isteği
// const newProduct = {
//   title: "New Product",
//   price: 9.99,
//   category: "electronics",
// };

// api
//   .postData(newProduct)
//   .then((data) => {
//     console.log("POST Response:", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // PUT isteği
// const updatedProduct = {
//   title: "Updated Product",
//   price: 19.99,
//   category: "electronics",
// };

// const productIdToUpdate = 1;

// api
//   .updateData(productIdToUpdate, updatedProduct)
//   .then((data) => {
//     console.log("PUT Response:", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // DELETE isteği
// const productIdToDelete = 1;

// api
//   .deleteData(productIdToDelete)
//   .then((data) => {
//     console.log("DELETE Response:", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
