const getDataButton = document.getElementById('getData');
const outputData = document.getElementById('output');

getDataButton.addEventListener('click', function() {
  const xhr = new XMLHttpRequest();
  // console.log(xhr);

  xhr.onreadystatechange = function() {
    // console.log(this.readyState);

    // if(this.readyState === 4 && this.status === 200) {
      // console.log(this.responseText);
    //   outputData.textContent = this.responseText;
    // }
    // if(this.readyState === 4 && this.status === 404) {
    //   console.log('Aradığınız Veriye Ulaşılamadı.');
    //   outputData.textContent = 'Aradığınız Veriye Ulaşılamadı.';
    // }
  };

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(this.responseText);
      outputData.textContent = this.responseText;
    }
  }
  xhr.open('GET', 'text.txt', true);
  xhr.send();
});