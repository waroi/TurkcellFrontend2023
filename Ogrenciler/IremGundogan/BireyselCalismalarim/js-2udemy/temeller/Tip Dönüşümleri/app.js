let value;

//Veritiplerini String'e çevirme
value = string(123);
value = string(3.14);
value = string(true);
value = string(false);
value = string(function () {
  console.log();
});
value = string([1, 2, 3, 4]);
value = (10).toString();
value = (3.14).toString();

//veritiplerini sayılara çevirme
value = Number("123");
value = Number(null);
value = Number(undefined);
value = Number("hello world");
value = Number(function () {
  console.log();
});
value.Number([1, 2, 3, 4]);
value = Number("3.14");
value = parseFloat("3.14");
value = parseInt("3");

const a = "Hello" + 34;

// const a = Number("34") + 53;
console.log(a);
console.log(typeof a);

console.log(value);
console.log(typeof value);
