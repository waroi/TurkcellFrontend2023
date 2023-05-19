class Request {
  constructor(url) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }

  get(callback) {
    this.xhr.open("GET", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Hata oluştu", null);
      }
    };
    this.xhr.send();
  }

  post(data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  put(data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  delete(callback) {
    this.xhr.open("DELETE", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, "Veri silme işlemi başarılı");
      } else {
        callback("Hata oluştu", null);
      }
    };
    this.xhr.send();
  }
}

const request = new Request("https://6467ce79e99f0ba0a81867a1.mockapi.io/api/v1/blogs");