export const postNewUserCart = async (values) => {
  return await fetch("http://localhost:3000/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Veriler gönderilirken bir hata oluştu.");
      }
      return response.json();
    })
  // .catch((error) => {
  //   console.error(error);
  // });
};

// export const fetchAllCart = async () => {
//   const response = await fetch("http://localhost:3000/carts");
//   const res = await response.json();
//   return res
// }

export const fetchPrivateCart = async (userId) => {
  const response = await fetch(`http://localhost:3000/carts/${userId}`);
  const res = await response.json();
  return res
}

export const addNewItemOnCart = async (userId, item) => {
  return await fetch(`http://localhost:3000/carts/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Yeni öğe eklendi:', data);
      // Yeni öğenin eklenmesinden sonra yapılacak işlemleri buraya ekleyebilirsiniz
    })
    .catch(error => {
      console.error('Hata:', error);
    });

}

// export const deleteCartItem = async (userId, itemId) => {
//   return fetch(`http://localhost:3000/carts/${userId}/cartItems/${itemId}`, {
//     method: 'DELETE'
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Ürün silinirken bir hata oluştu.');
//       }
//       console.log('Ürün başarıyla silindi.');
//     })
//     .catch(error => {
//       console.error('Hata:', error);
//     });
// };
