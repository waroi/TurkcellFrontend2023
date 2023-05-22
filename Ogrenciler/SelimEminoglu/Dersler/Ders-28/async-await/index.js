class Request {
  // burada async aslında burayı promise şekline dönüştürüyor
  async get(url) {
    // await kısmında ise bu bilgi gelince await çalışacak şeklinde oluyor
    const response = await fetch(url);
    if (!response.ok) {
      // catch ile yakalacağımız kısmı böyle belirtiyoruz
      throw new Error("hata");
    }
    const data = await response.json();
    return data;
  }
}

const request = new Request();

request
  .get("/api")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
