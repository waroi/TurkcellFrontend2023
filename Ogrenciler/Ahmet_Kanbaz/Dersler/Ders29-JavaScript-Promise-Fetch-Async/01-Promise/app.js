function getData(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if(typeof data == 'number') {
        resolve(data * data);
      }
      else {
        reject('Lütfen bir sayı girin!');
      }
    }, 3000)
  })
}

getData(2).then((response) => console.log(response)).catch((error) => console.log(error));