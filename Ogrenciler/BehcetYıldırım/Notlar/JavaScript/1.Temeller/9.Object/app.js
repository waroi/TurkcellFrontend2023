 let value;
 let deger;
 const programmer = {
    name : "behcet yıldırım",
    age : 23,
    email: "behcet@gmail.com",
    langs:["python","java","C"],
    
    address:{
        city: "konya",
        street: "meram",
    },

    work : function(){
        console.log("programcı çalışıyor...");
    }

  }



  value = programmer;

  value= programmer.email; // yaygın kullanım
  value= programmer["email"];

  value = programmer.langs;

  value= programmer.address.city;
  value= programmer.address.street;

  value= programmer.work();



  const yazılımcı = [
    {name : "sait ", age:23},
    {name : "behcet", age:24}
  ];

  deger = yazılımcı[0];
  deger = yazılımcı[1].name;

  console.log(deger);