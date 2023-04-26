var result = '';


const press = val => {
  result += val;
  document.getElementById("result").value = result;
}

const clearResult = () => {
  result = '';
  document.getElementById("result").value = result;
}

function calculate() {
var operands = result.match(/\d+/g);
var operators = result.match(/[+\-*/]/g);
  
if (!operands || !operators || operators.length >= 2) {
  document.getElementById("result").value = "Geçersiz Girdi"
    return;
}

var resultValue = parseInt(operands[0], 10);
for (var i = 1; i < operands.length; i++) {
    switch (operators[i - 1]) {
        case '+':
            resultValue += parseInt(operands[i], 10);
            break;
        case '-':
            resultValue -= parseInt(operands[i], 10);
            break;
        case '*':
            resultValue *= parseInt(operands[i], 10);
            break;
        case '/':
            if (parseInt(operands[i], 10) === 0) {
                document.getElementById("result").value = "Bölünmez"
                return;
            }
            resultValue /= parseInt(operands[i], 10);
            break;
        default:
        document.getElementById("result").value = "Geçersiz Girdi"
            return;
    }
}
result = parseFloat(resultValue.toString());
document.getElementById("result").value = result;
}