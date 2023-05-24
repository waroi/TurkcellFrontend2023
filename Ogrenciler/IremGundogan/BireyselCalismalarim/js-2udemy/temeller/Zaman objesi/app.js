let value;

const now = new Date(); ///Şuanki zamanı almanı sağlar
console.log(now);
const date1 = new Date("2-3-2001 21:30:00");
const date2 = new Date("February 3 2001");
const date3 = new Date("2-3-2001");

value = date1;
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

//DEĞER DEĞİŞTİRME
date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(2000);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);
value = date1;

console.log(value);
