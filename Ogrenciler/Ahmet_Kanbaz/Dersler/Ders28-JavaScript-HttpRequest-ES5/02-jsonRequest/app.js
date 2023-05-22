const getData = document.getElementById('getData');
const displayData = document.getElementById('employees');

getData.addEventListener('click', getAllData4JSON);

function getAllData4JSON() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);
  // xhr.onreadystatechange = function() {
  //   if(this.readyState === 4 && this.status === 200) {
  //     const employeesData = JSON.parse(this.responseText);
  //     console.log(employeesData);
  //     employeesData.map((employee) => {
  //       displayData.innerHTML += `
  //       <tr>
  //         <td>${employee.name}</td>
  //         <td>${employee.department}</td>
  //         <td>${employee.salary}</td>
  //       </tr>`;
  //     });
  //   }
  // }
  xhr.onload = function() {
    if(this.status === 200) {
      const employeesData = JSON.parse(this.responseText);
      console.log(employeesData);
      employeesData.forEach((employee) => {
        displayData.innerHTML += `
        <tr>
          <td>${employee.name}</td>
          <td>${employee.department}</td>
          <td>${employee.salary}</td>
        </tr>`;
      });
    }
  }
  xhr.send();
}