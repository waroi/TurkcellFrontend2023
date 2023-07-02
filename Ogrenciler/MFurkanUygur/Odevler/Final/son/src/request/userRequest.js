import { toast } from "react-toastify";

export const fetchAllUsers = async () => {
  const response = await fetch("http://localhost:3000/users");
  const res = await response.json();
  return res
};


export const postNewUser = async (values) => {
  return await fetch("http://localhost:3000/users", {
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
    .catch((error) => {
      toast.error(error);
      throw new Error("Hata",error);

    });
};

export const updateUser = async (userId, values) => {
  const updatedData = { ...values, isLogin: true };
  return await fetch(`http://localhost:3000/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Kullanıcı güncellenirken bir hata oluştu.');
      }
      return response.json();
    })
    .catch(error => {
      toast.error(error);
      throw new Error("Hata",error);
    });
};


