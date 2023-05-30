
// Alarm objesi için constructor fonksiyonu
function Alarm(hour, minute) {
  this.hour = hour;
  this.minute = minute;
  this.active = true;
}

// Alarm listesi
var alarms = [];

// Saati güncellemek için bir fonksiyon
function updateClock() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  hour = ("0" + hour).slice(-2);
  minute = ("0" + minute).slice(-2);
  second = ("0" + second).slice(-2);

  var clockElement = document.getElementById("clock");
  clockElement.textContent = hour + ":" + minute + ":" + second;

  checkAlarms(hour, minute); // Alarm kontrolü yapılıyor

  setTimeout(updateClock, 1000);
}

// Alarmı eklemek için bir fonksiyon
function addAlarm() {
  var hourInput = document.getElementById("hourInput");
  var minuteInput = document.getElementById("minuteInput");

  var hour = parseInt(hourInput.value);
  var minute = parseInt(minuteInput.value);

  if (isNaN(hour) || hour < 0 || hour > 23) {
    alert("Geçerli bir saat girin (0-23 arasında).");
    return;
  }

  if (isNaN(minute) || minute < 0 || minute > 59) {
    alert("Geçerli bir dakika girin (0-59 arasında).");
    return;
  }

  var alarm = new Alarm(hour, minute);
  alarms.push(alarm);

  var alarmList = document.getElementById("alarmList");
  var listItem = document.createElement("li");

  var time = ("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2);
  listItem.textContent = time;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Sil";
  deleteButton.onclick = function() {
    alarms = alarms.filter(function(a) {
      return a.hour !== hour || a.minute !== minute;
    });
    alarmList.removeChild(listItem);
  };

  var toggleButton = document.createElement("button");
  toggleButton.textContent = "Açık";
  toggleButton.onclick = function() {
    alarm.active = !alarm.active;
    if (toggleButton.textContent === "Açık") {
      toggleButton.textContent = "Kapalı";
      listItem.style.textDecoration = "line-through";
    } else {
      toggleButton.textContent = "Açık";
      listItem.style.textDecoration = "none";
    }
  };

  listItem.appendChild(deleteButton);
  listItem.appendChild(toggleButton);
  alarmList.appendChild(listItem);
}

// Alarm kontrolü için bir fonksiyon
function checkAlarms(hour, minute) {
  alarms.forEach(function(alarm) {
    if (alarm.active && alarm.hour === hour && alarm.minute === minute) {
      playAlarm();
      openModal(alarm);
    }
  });
}

// Alarm çalma işlemi
function playAlarm() {
  // Müzik çalma işlemleri burada yapılacak
  var closeButton = document.getElementById("closeButton");
  var audio = new Audio('path/to/alarm-sound.mp3');
  audio.play();
  closeButton.onclick = function stopAlarm() {
    if (audio !== null) {
      audio.pause();
      audio.currentTime = 0;
      audio = null;
    }
  }
};


// Modal açma işlemi
function openModal(alarm) {
  var modal = document.getElementById("modal");
  var closeButton = document.getElementById("closeButton");
  var snoozeButton = document.getElementById("snoozeButton");

  modal.style.display = "block";

  closeButton.onclick = function() {
    modal.style.display = "none";
    alarm.active = false;
  };

  snoozeButton.onclick = function() {
    modal.style.display = "none";
    alarm.minute += 5;
    if (alarm.minute >= 60) {
      alarm.minute -= 60;
      alarm.hour++;
      if (alarm.hour >= 24) {
        alarm.hour = 0;
      }
    }
    alarm.active = true;
  };
}

// Sayfa yüklendiğinde saat güncellenir ve alarm listesi oluşturulur
window.onload = function() {
  updateClock();

  // Alarm kontrolünü başlat
  setInterval(function() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();

    checkAlarms(hour, minute);
  }, 1000);
};


