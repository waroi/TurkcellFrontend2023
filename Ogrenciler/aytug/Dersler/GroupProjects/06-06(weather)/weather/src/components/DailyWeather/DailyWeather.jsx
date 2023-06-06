import React from 'react'

function DailyWeather({ weather }) {
  let min_temp = [...weather].sort((a, b) => a.main.temp_min - b.main.temp_min)
  let max_temp = [...weather].sort((a, b) => b.main.temp_max - a.main.temp_max)
  const day = new Date(weather[0].dt_txt).getDay();
console.log(weather[0].dt_txt);
  let dayName;
switch (day) {
  case 0:
    dayName = "Pazar";
    break;
  case 1:
    dayName = "Pazartesi";
    break;
  case 2:
    dayName = "Salı";
    break;
  case 3:
    dayName = "Çarşamba";
    break;
  case 4:
    dayName = "Perşembe";
    break;
  case 5:
    dayName = "Cuma";
    break;
  case 6:
    dayName = "Cumartesi";
    break;
}
  return (
    <div className='col'>
      <div className='card border-0 dailycards'>
        <h4>{dayName}</h4>
        <div className='d-flex text-center justify-content-around mt-3'>
          <p className='fs-5'><i class="bi text-primary bi-thermometer-low"></i> {Math.floor(min_temp[0].main.temp_min)}°C - {Math.floor(max_temp[0].main.temp_max)}°C <i class="bi text-danger bi-thermometer-high"></i></p>
        </div>
      </div>
    </div>
  )
}

export default DailyWeather