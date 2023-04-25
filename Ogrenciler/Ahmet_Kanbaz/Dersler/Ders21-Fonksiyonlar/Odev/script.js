let decision = true;

while (decision) {
  let firstNumber = Number(prompt("Birinci Sayıyı Giriniz:"));
  while (isNaN(firstNumber)) {
    firstNumber = Number(
      prompt("Lütfen Doğru Değer Giriniz.\nBirinci Sayıyı Giriniz:")
    );
  }
  let secondNumber = Number(prompt("İkinci Sayıyı Giriniz:"));
  while (isNaN(secondNumber)) {
    secondNumber = Number(
      prompt("Lütfen Doğru Değer Giriniz.\nİkinci Sayıyı Giriniz:")
    );
  }
  let operation = Number(prompt(
    "Yapmak istediğiniz işlemin numarasını giriniz\n1- Toplama\n2- Çıkarma\n3- Çarpma\n4- Bölme\n5- Üs Alma\n6- Mod ALma"
  ));

  switch (operation) {
    case 1:
      let sumResult = toplama(firstNumber, secondNumber);
      alert(`${firstNumber} ve ${secondNumber} sayılarının toplamı: ${sumResult}`);
      break;
    case 2:
      let subtractionResult = cikarma(firstNumber, secondNumber);
      alert(`${firstNumber} sayısından ${secondNumber} sayısını çıkardığımızda sonuç: ${subtractionResult}`);
      break;
    case 3:
      let carpmaResult = carpma(firstNumber, secondNumber);
      alert (`${firstNumber} ve ${secondNumber} sayılarının çarpımı sonucu: ${carpmaResult}`);
      break;
    
    default:
      alert("Lütfen Doğru Bir Seçim Yapınız...");
  }

  // decisionFunction();
}

function toplama(number1, number2) {
  return number1 + number2;
}

function cikarma(number1, number2) {
  return number1 - number2;
}

function carpma(num1, num2) {
  return num1 * num2;
}

function decisionFunction() {
  while (true) {
    let valueDecision = prompt("Devam etmek istiyor musunuz? (E/H)");
    if (valueDecision == "E" || valueDecision == "e") {
      decision = true;
      break;
    } else if (valueDecision == "H" || valueDecision == "h") {
      decision = false;
      alert("Programdan çıkış yapılıyor...");
      break;
    } else alert("Lütfen geçerli bir değer giriniz!");
  }
  return decision;
}
