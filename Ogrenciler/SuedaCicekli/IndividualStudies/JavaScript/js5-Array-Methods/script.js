let girls = ["Sueda", "Ceyda", "Selin"];
let boys = ["Abdullah", "Mehmet", "Ali"];
let students = [];

result = girls.length;

//array to string 

result = girls.toString();
result = girls.join(" - "); // aralarına çizgi koyarak yazdırır

// eleman silme

// result = girls.pop(); // son elemanı siler ve silinen elemanı döndürür
// result = girls.shift(); // ilk elemanı siler ve silinen elemanı döndürür

// // eleman ekleme
// result = girls.push("Elife"); // sona ekler ve eleman sayısını döndürür
// result = girls.unshift("Sude"); // başa ekler ve eleman sayısını döndürür

// concet 
// result = girls.concat(boys); // iki arrayi birleştirir
// girls.push(boys);
result = students.push(girls, boys)
console.log("students", students);



console.log(girls);
console.log(result); //concat






