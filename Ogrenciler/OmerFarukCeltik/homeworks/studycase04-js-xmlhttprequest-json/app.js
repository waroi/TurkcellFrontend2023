let btn = document.querySelector("#btn");
let userstable = document.querySelector("#userstable");

btn.addEventListener("click", function(){
  let xhr = new XMLHttpRequest();
  xhr.open("GET","test.json", true);
  xhr.onload = function() {
    if(this.status == 200){
      let parsedData = JSON.parse(this.responseText);
      parsedData.forEach(item => {
        userstable.innerHTML += `
        <tr>
        <th scope="row">1</th>
        <td>Otto</td>
        <td>@mdo</td>
        <td>${item.name} </td>
      </tr>
        `
        
      });
    }
  }
  xhr.send();
})