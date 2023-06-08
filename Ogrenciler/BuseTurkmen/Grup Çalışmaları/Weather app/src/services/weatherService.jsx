export async function getWeatherByCity(city){

   const data = await fetch(`${import.meta.env.VITE_ENDPOINT}/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=tr`);
   const response = await data.json();

   return response;
}
export async function getWeatherByLocation(lat,lon){

   const data = await fetch(`${import.meta.env.VITE_ENDPOINT}/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=tr`);
   const response = await data.json();

   return response[0].name;
}


export  const getLocation = () => {
   return new Promise((resolve, reject) => {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
         (position) => {
           const { latitude, longitude } = position.coords;
           resolve({ latitude, longitude });
         },
         (error) => {
           reject(error);
         }
       );
     } else {
       reject(new Error('Tarayıcınızda konum almak desteklenmiyor.'));
     }
   });
 };