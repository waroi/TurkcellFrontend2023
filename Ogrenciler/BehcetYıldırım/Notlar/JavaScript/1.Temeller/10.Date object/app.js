let value;

const now = new Date(); // içerisine bir şey girmezse şuanki zamanıa alır.

const date1  = new Date("4-5-1999 10:00:00");

const date2  = new Date("April 5 1999");

const date3  = new Date("4/5/1999");

value = date1;

value= date1.getMonth();// ocak ayı index 0 dan başlar. o yüzden 3 gösterir.
value=date2.getDate();// ayın kaçı olduğunu gösterir.
value= date3.getDay();// haftanın  hangi günü olduğunu gösterir. index 0dan başlar. pazar = 0.
value=date1.getHours();

date1.setMonth(7);

value= date1.getMonth();
console.log(value);