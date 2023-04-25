var dt = new Date();
console.log(dt.getMonth());
console.log(dt.getYear());
console.log(dt.getMinutes());
console.log(dt.getHours());
console.log(dt.getDate());
console.log(dt);

var dtA = new Date('01/20/2000 01:35:15');
var dtB = new Date(2000,01,20,01,35,15);
console.log(dtA);
console.log(dtB);

var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);
console.log(dtC); 

var start = new Date('1/1/1990');
var end = new Date('1/1/1995');
var milisecond = end - start;
var saniye = milisecond/1000;
var dakika = saniye/60;
var saat = dakika/60;
var gun = saat/24;
console.log('milisecond:'+milisecond);
console.log('saniye:'+saniye);
console.log('dakika:'+dakika);
console.log('saat:'+saat);
console.log('gun:'+gun);

var birthday = new Date('20/1/2000');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);
console.log(ageDate.getFullYear() - 1970);
//console.log(birthday.getTime());
//console.log(Date.now())

var momDay = new Date();
momDay.setHours(0,0,0,0);
momDay.setFullYear(2023);
momDay.setDate(1);
momDay.setMonth(4);

while(momDay.getDay() !=0){
    momDay.setDate(momDay.getDate()+1)
}

momDay.setDate(momDay.getDate()+7)
console.log(momDay);





