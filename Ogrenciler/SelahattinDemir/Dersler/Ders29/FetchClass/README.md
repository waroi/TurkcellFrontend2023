[Turn Back](../../../)

<h1 align="center">Ders29 - Javascript Fetch API Class</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript Fetch API Class

&#10147; In modern web development, making HTTP requests to retrieve or send data is a common task. JavaScript provides the Fetch API, a powerful and flexible feature for performing such requests.

&#10147; The class structure in JavaScript is used to handle fetch operations in a more organized and reusable way.

### Creating the FetchAPI Class:

&#10147; The FetchAPI class is created by extending the built-in `fetch` function. This allows us to use the `fetch` function as a method of the class.

&#10147; To begin with, let's define a class called FetchAPI. This class will encapsulate the fetch operations and provide methods for making GET and POST requests. Here's an example implementation:

#### Example

    class FetchAPI {
      constructor(baseUrl) {
        this.baseUrl = baseUrl;
      }

      async get(url) {
        const response = await fetch(this.baseUrl + url);
        const responseData = await response.json();
        return responseData;
      }

      async post(url, data) {
        const response = await fetch(this.baseUrl + url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        return responseData;
      }
    }

&#10147; The constructor method is used to initialize the class. In this case, we're using it to set the base URL for the API.

&#10147; The `get` method is used to make GET requests. It takes a URL as an argument and returns a Promise that resolves to the response data.

&#10147; The `post` method is used to make POST requests. It takes a URL and data as arguments and returns a Promise that resolves to the response data.

### Using the FetchAPI Class:

&#10148; Now that we have a class for handling fetch operations, let's see how we can use it to make requests.

&#10148; First, we need to create an instance of the FetchAPI class. We can do this by calling the constructor method with the base URL as an argument:

#### Example

    const api = new FetchAPI("https://jsonplaceholder.typicode.com");

&#10148; Next, we can use the `get` and `post` methods to make requests:

#### Example

    api.get("/posts").then((data) => console.log(data));
    api
      .post("/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      })
      .then((data) => console.log(data));

&#10148; The `get` method takes a URL as an argument and returns a Promise that resolves to the response data.

&#10148; The `post` method takes a URL and data as arguments and returns a Promise that resolves to the response data.

&#10148; The `then` method is used to handle the response data. It takes a callback function as an argument and executes it when the Promise is resolved.

### Conclusion:

&#10148; By implementing the fetch operations within a class structure, we achieve better organization and reusability of our code. The FetchAPI class provides a clear and concise interface for making HTTP requests, making it easier to manage and maintain our fetch operations.

&#10148; By utilizing JavaScript's class structure and the Fetch API, we can handle fetch requests in a more structured and efficient manner. This approach improves code organization, promotes reusability, and makes the fetch operations more manageable.

&#10148; With the FetchAPI class, you can easily perform GET and POST requests, handle responses, and streamline your fetch operations. 


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders29/FetchClass/media.jpg)
