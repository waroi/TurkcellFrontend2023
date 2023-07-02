class ChuckJokes {
  static async getRandomJoke() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
  static async getCategories() {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
  static async getJokesByCategory(category) {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
  static async getJokesBySearch(query) {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    );
    const data = await response.json();
    if (response.status !== 200) {
      return "404";
    }
    return data;
  }
}

export default ChuckJokes;
