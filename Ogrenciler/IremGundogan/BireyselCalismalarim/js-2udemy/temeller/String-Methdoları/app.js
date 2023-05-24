let value;

const firstName = "Mahmut";
const lastName = "Uyan";

const langs = "Java,Python,C++";
value = firstName + lastName;
value = firstName + "" + lastName;
value = "İrem Gündoğan";
value = value + "Coşkun";
value += "Coşkun"; //value = value + "Coşkun"

value = firstName.length;

value = firstName.concat(" ", lastName, "", "Caz"); //firstName + ""+...
value = firstName.toLowerCase();
value = firstName.toUpperCase();
value = firstName[0];
value = firstName[2];
value = firstName.length;
value = firstName[firstName.length - 1]; ///Son elemanı bulmak için

///Index of
value = firstName.indexOf("M");
value = firstName.indexOf("a");
value = firstName.indexOf("m");

//char at
value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);

//Split
value = langs.split(",");

///Replace
value = langs.replace("Python", "CSS"); //PTYHONI DEĞİŞTİRME

//INCLUDES
value = langs.includes("Java");
value = langs.includes("HTML");

console.log(value);
