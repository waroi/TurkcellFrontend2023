import { toast } from "react-toastify";

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
    .catch(error => {
      toast.error('Hata:', error);
    });
};

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
    .catch(error => {
      toast.error('Hata:', error);
    });

}

