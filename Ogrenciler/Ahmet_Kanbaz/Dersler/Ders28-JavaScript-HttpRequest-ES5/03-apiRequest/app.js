const getAPIData = document.getElementById('getData');
const displayGetAPIData = document.getElementById('displayAPIData');

getAPIData.addEventListener('click', getAllData);

function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  // xhr.onreadystatechange = function() {
  //   if(this.status === 200) {
  //     const apiParse = JSON.parse(this.responseText);
  //     apiParse.map((api) => {
  //       displayGetAPIData.innerHTML += `
  //         <tr>
  //           <td>${api.title}</td>
  //           <td>${api.body}</td>
  //         </tr>
  //       `
  //     });
  //   }
  //   else {
  //     displayGetAPIData.innerHTML = '<p>Bir hata oluştu.</p>'
  //   }
  // }

  xhr.onload = function() {
    if(this.status === 200) {
      const apiParse = JSON.parse(this.responseText);
      apiParse.forEach((api) => {
        displayGetAPIData.innerHTML += `
          <tr>
            <td>${api.title}</td>
            <td>${api.body}</td>
          </tr>
        `
      });
    }
    else {
      displayGetAPIData.innerHTML = '<p>Bir Hata Oluştu.</p>'
    }
  }




  xhr.send();
}