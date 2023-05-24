// // Dijital saat güncelleme fonksiyonu
// function updateClock() {
//     var now = new Date();
//     var clock = document.getElementById('clock');
//     clock.innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
//     setTimeout(updateClock, 1000);
//   }
  
//   // Sayfa yüklendiğinde saat güncelleniyor
//   window.onload = function() {
//     updateClock();
//   };
  
//   // Alarm ekleme fonksiyonu
//   function addAlarm() {
//     var hourInput = document.getElementById('hourInput');
//     var minuteInput = document.getElementById('minuteInput');
    
//     var hour = parseInt(hourInput.value);
//     var minute = parseInt(minuteInput.value);
  
//     // Girilen saat ve dakika değerlerinin kontrolü
//     if (isNaN(hour) || hour < 0 || hour > 24) {
//       alert('Geçerli bir saat girin (0-24)');
//       return;
//     }
  
//     if (isNaN(minute) || minute < 0 || minute > 59) {
//       alert('Geçerli bir dakika girin (0-59)');
//       return;
//     }
  
//     var alarmTime = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2);
    
//     // Alarmı listeye ekleme
//     var alarmList = document.getElementById('alarmList');
//     var li = document.createElement('li');
//     li.innerHTML = `
//       <span class="alarm-time">${alarmTime}</span>
//       <input type="checkbox" class="toggle-alarm" onchange="toggleAlarm(this)">
//       <button onclick="deleteAlarm(this)">Sil</button>
//     `;
//     alarmList.appendChild(li);
  
//     // Inputları temizleme
//     hourInput.value = '';
//     minuteInput.value = '';
//   }
  
//   // Alarmı açma/kapama fonksiyonu
//   function toggleAlarm(checkbox) {
//     var alarmTime = checkbox.previousElementSibling.innerText;
//     var li = checkbox.parentNode;
  
//     if (checkbox.checked) {
//       li.classList.add('active');
//       // Alarmın açık olduğunu işaretlemek için yapılacak aksiyonları buraya ekleyebilirsiniz
//     } else {
//       li.classList.remove('active');
//       // Alarmın kapalı olduğunu işaretlemek için yapılacak aksiyonları buraya ekleyebilirsiniz
//     }
//   }
  
//   // Alarmı silme fonksiyonu
//   function deleteAlarm(button) {
//     var li = button.parentNode;
//     li.parentNode.removeChild(li);
//   }
  
//   // Modal açma fonksiyonu
//   function openModal() {
//     // Modalı açmak için gerekli aksiyonları buraya ekleyebilirsiniz
//   }
  
//   // Modal kapatma fonksiyonu
//   function closeModal() {
//     // Modalı kapatmak için gerekli aksiyonları buraya ekleyebilirsiniz
//   }
  

//Initial References
let timerRef = document.querySelector(".timer-display");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const activeAlarms = document.querySelector(".activeAlarms");
const setAlarm = document.getElementById("set");
let alarmsArray = [];
let alarmSound = new Audio("./alarm.mp3");

let initialHour = 0,
  initialMinute = 0,
  alarmIndex = 0;

//Append zeroes for single digit
const appendZero = (value) => (value < 10 ? "0" + value : value);

//Search for value in object
const searchObject = (parameter, value) => {
  let alarmObject,
    objIndex,
    exists = false;
  alarmsArray.forEach((alarm, index) => {
    if (alarm[parameter] == value) {
      exists = true;
      alarmObject = alarm;
      objIndex = index;
      return false;
    }
  });
  return [exists, alarmObject, objIndex];
};

//Display Time
function displayTimer() {
  let date = new Date();
  let [hours, minutes, seconds] = [
    appendZero(date.getHours()),
    appendZero(date.getMinutes()),
    appendZero(date.getSeconds()),
  ];

  //Display time
  timerRef.innerHTML = `${hours}:${minutes}:${seconds}`;

  //Alarm
  alarmsArray.forEach((alarm, index) => {
    if (alarm.isActive) {
      if (`${alarm.alarmHour}:${alarm.alarmMinute}` === `${hours}:${minutes}`) {
        alarmSound.play();
        alarmSound.loop = true;
      }
    }
  });
}

const inputCheck = (inputValue) => {
  inputValue = parseInt(inputValue);
  if (inputValue < 10) {
    inputValue = appendZero(inputValue);
  }
  return inputValue;
};

hourInput.addEventListener("input", () => {
  hourInput.value = inputCheck(hourInput.value);
});

minuteInput.addEventListener("input", () => {
  minuteInput.value = inputCheck(minuteInput.value);
});

//Create alarm div

const createAlarm = (alarmObj) => {
  //Keys from object
  const { id, alarmHour, alarmMinute } = alarmObj;
  //Alarm div
  let alarmDiv = document.createElement("div");
  alarmDiv.classList.add("alarm");
  alarmDiv.setAttribute("data-id", id);
  alarmDiv.innerHTML = `<span>${alarmHour}: ${alarmMinute}</span>`;

  //checkbox
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", (e) => {
    if (e.target.checked) {
      startAlarm(e);
    } else {
      stopAlarm(e);
    }
  });
  alarmDiv.appendChild(checkbox);
  //Delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", (e) => deleteAlarm(e));
  alarmDiv.appendChild(deleteButton);
  activeAlarms.appendChild(alarmDiv);
};

//Set Alarm
setAlarm.addEventListener("click", () => {
  alarmIndex += 1;

  //alarmObject
  let alarmObj = {};
  alarmObj.id = `${alarmIndex}_${hourInput.value}_${minuteInput.value}`;
  alarmObj.alarmHour = hourInput.value;
  alarmObj.alarmMinute = minuteInput.value;
  alarmObj.isActive = false;
  console.log(alarmObj);
  alarmsArray.push(alarmObj);
  createAlarm(alarmObj);
  hourInput.value = appendZero(initialHour);
  minuteInput.value = appendZero(initialMinute);
});

//Start Alarm
const startAlarm = (e) => {
  let searchId = e.target.parentElement.getAttribute("data-id");
  let [exists, obj, index] = searchObject("id", searchId);
  if (exists) {
    alarmsArray[index].isActive = true;
  }
};

//Stop alarm
const stopAlarm = (e) => {
  let searchId = e.target.parentElement.getAttribute("data-id");
  let [exists, obj, index] = searchObject("id", searchId);
  if (exists) {
    alarmsArray[index].isActive = false;
    alarmSound.pause();
  }
};

//delete alarm
const deleteAlarm = (e) => {
  let searchId = e.target.parentElement.parentElement.getAttribute("data-id");
  let [exists, obj, index] = searchObject("id", searchId);
  if (exists) {
    e.target.parentElement.parentElement.remove();
    alarmsArray.splice(index, 1);
  }
};

window.onload = () => {
  setInterval(displayTimer);
  initialHour = 0;
  initialMinute = 0;
  alarmIndex = 0;
  alarmsArray = [];
  hourInput.value = appendZero(initialHour);
  minuteInput.value = appendZero(initialMinute);
};