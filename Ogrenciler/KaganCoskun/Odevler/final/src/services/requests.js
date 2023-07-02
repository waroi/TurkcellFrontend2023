export const getAllProducts = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`)
    return await response.json()
}

export const getProductById = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
    return await response.json()
}

export const updateProduct = async (id, product) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    return await response.json()
}