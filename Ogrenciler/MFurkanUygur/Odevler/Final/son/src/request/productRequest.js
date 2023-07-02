import { toast } from "react-toastify";

export const fetchAllProduct = async () => {
    const response = await fetch("http://localhost:3000/products");
    const res = await response.json();
    return res
}

export const updateMainProduct = async (id, updateProduct) => {
    return await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateProduct)
    })
        .then(response => response.json())
        .catch(error => {
            toast.error('Hata:', error);
        });
}
export const fetchOneProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const res = await response.json();
    return res
}