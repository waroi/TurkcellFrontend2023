class Request {
  constructor(url) {
    this.url = url;
  }
  async get() {
    const response = await fetch(this.url);
    const responseData = await response.json();
    return responseData;
  }

  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  }

  async put(id, data) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  }

  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const responseData = await response.json();
    return responseData;
  }
}

export default Request;

// export async function fetchPokemon() {
//   const result = await fetch(url);
//   const data = await result.json();
//   return data;
// }

// export async function fetchPokemonList(url) {
//   const result = await fetch(url);
//   const data = await result.json();

//   return data;
// }

// export async function fetchPokemonDetail(id) {
//   const result = await fetch(url + `/${id}/`);
//   const data = await result.json();

//   return data;
// }

// export async function fetchPokemonEvolution(id) {
//   const result = await fetch(url2 + `/${id}/`);
//   const data = await result.json();

//   return data;
// }
