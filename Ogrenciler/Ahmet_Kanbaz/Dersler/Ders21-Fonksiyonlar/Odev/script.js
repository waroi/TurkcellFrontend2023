let decision = true;
let firstNumberName = "Birinci";
let secondNumberName = "İkinci";

const toplama = (number1, number2) => number1 + number2;

const cikarma = (number1, number2) => number1 - number2;

const carpma = (num1, num2) => num1 * num2;

const bolme = (num1, num2) => num1 / num2;

const modAlma = (num1, num2) => num1 % num2;

while (decision) {
  let firstNumber = Number(prompt("Birinci Sayıyı Giriniz:"));
  firstNumber = isNotNumber(firstNumber, firstNumberName);

  let secondNumber = Number(prompt("İkinci Sayıyı Giriniz:"));
  secondNumber = isNotNumber(secondNumber, secondNumberName);
  let operation = Number(prompt(
    "Yapmak istediğiniz işlemin numarasını giriniz\n1- Toplama\n2- Çıkarma\n3- Çarpma\n4- Bölme\n5- Üs Alma\n6- Mod ALma"
  ));
  operation = isNotNumberOperation(operation);

  switch (operation) {
    case 1:
      let sumResult = toplama(firstNumber, secondNumber);
      alert(
        `${firstNumber} ve ${secondNumber} sayılarının toplamı: ${sumResult}`
      );
      break;
    case 2:
      let subtractionResult = cikarma(firstNumber, secondNumber);
      alert(
        `${firstNumber} sayısından ${secondNumber} sayısını çıkardığımızda sonuç: ${subtractionResult}`
      );
      break;
    case 3:
      let carpmaResult = carpma(firstNumber, secondNumber);
      alert(
        `${firstNumber} ve ${secondNumber} sayılarının çarpımı sonucu: ${carpmaResult}`
      );
      break;
    case 4:
      let bolmeSonuc = bolme(firstNumber, secondNumber);
      alert(
        `${firstNumber} sayısının ${secondNumber} sayısına bölümünün sonucu: ${bolmeSonuc}`
      );
      break;
    case 5:
      let usSonuc = usAlma(firstNumber, secondNumber);
      alert(`${firstNumber} sayısının ${secondNumber} üssü sonucu: ${usSonuc}`);
      break;
    case 6:
      let modSonuc = modAlma(firstNumber, secondNumber);
      alert(
        `${firstNumber} sayısının ${secondNumber} sayısına bölümünden kalan: ${modSonuc}`
      );
      break;

    default:
      operation = isNotNumberOperation(operation);
  }

  decisionFunction();
}

function isNotNumber(number, name) {
  while (isNaN(number)) {
    number = Number(
      prompt(`Lütfen Doğru Değer Giriniz.\n${name} Sayıyı Giriniz:`)
    );
  }
  return number;
}

function isNotNumberOperation(operation) {
  while(isNaN(operation) || !(0 < operation && operation < 7)) {
    operation = Number(prompt(
      "Lütfen yapmak işlemin numarasını doğru giriniz!!!\n1- Toplama\n2- Çıkarma\n3- Çarpma\n4- Bölme\n5- Üs Alma\n6- Mod ALma"
    ));
  }
  return operation;
}

function usAlma(num1, num2) {
  let result = 1;
  if (num2 < 0) {
    for (let i = 0; num2 < i; i--) {
      result /= num1;
    }
  } else {
    for (let i = 0; i < num2; i++) {
      result *= num1;
    }
  }
  return result;
}

function decisionFunction() {
  while (true) {
    let valueDecision = prompt("Devam etmek istiyor musunuz? (E/H)");
    if (valueDecision == "E" || valueDecision == "e") {
      break;
    } else if (valueDecision == "H" || valueDecision == "h") {
      decision = false;
      alert("Programdan çıkış yapılıyor...");
      break;
    } else alert("Lütfen geçerli bir değer giriniz!");
  }
  return decision;
}
