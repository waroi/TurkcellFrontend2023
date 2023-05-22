class Request {

  // async function bize bir promise döndürür , ister bunu istersek de promise döndüren bir fonksiyon yazabiliriz.
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Bir hata oluştu");
    }
    const data = await response.json();
    return data;
  }
}

const request = new Request();

request
  .get("https://jsonplaceholder.typicode.com/")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));