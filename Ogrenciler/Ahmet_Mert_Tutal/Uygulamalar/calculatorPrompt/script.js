let firstNum, secondNum, operator, result;
result = 0;

while(true){
    firstNum = prompt('İlk sayıyı giriniz:');
    secondNum = prompt('İkinci sayıyı giriniz:');
    if(Number(firstNum) && Number(secondNum)){
        
        break;
    }
}


while(true){
    operator = prompt('İşlemi giriniz: (+,-,*,/)');
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
        break;
    }
}


function sum (a,b){
    return a+b;
}
function sub (a,b){
    return a-b;
}
function mul (a,b){
    return a*b;
}
function div (a,b){
    return a/b;
}
while (true){
switch(operator){
    case '+':
        result = sum(Number(firstNum),Number(secondNum));
        break;  
    case '-':
        result = sub(Number(firstNum),Number(secondNum));
        break;
    case '*':
        result = mul(Number(firstNum),Number(secondNum));
        break;
    case '/':
        result = div(Number(firstNum),Number(secondNum));
        break;
    default:
        console.log('Hatalı işlem');
        break;
}

alert(`Sonuç: ${result}`);

let devam = prompt('Devam etmek istiyor musunuz? (E/H)');
    if(devam.toLowerCase() !== 'e'){
    
    break;}
     else{
      firstNum=result;
      secondNum=prompt('İkinci sayıyı giriniz:');
      operator=prompt('İşlemi giriniz: (+,-,*,/)');
     
    }


}


    