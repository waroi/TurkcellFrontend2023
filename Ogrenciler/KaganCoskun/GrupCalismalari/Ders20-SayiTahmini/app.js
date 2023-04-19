    // let randomNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(randomNumber)
    // let counter =0;
    // let tahmin;
    // let score;

    // for(let i=0; randomNumber != tahmin ;i++){
    //     score=100-(5*counter)
    //     counter++;
    //     tahmin = prompt("Sayı tahmin ediniz!")

    //     if(tahmin>randomNumber){
    //         console.log("Aşağı")
    //     }
    //     else if(tahmin<randomNumber){
    //         console.log("yukarı")
    //     }
    // }

    // console.log(`Tebrikler ${counter} defada bildiniz :D Skorunuz ${score}`)

    // if (counter <2){
    //     console.log("Skorunuz",score[0])
    // }
    // else if(counter < 5){
    //     console.log("Skorunuz :",score[1])
    // }
    // else if(counter < 7){
    //     console.log("Skorunuz : " ,score[2])
    // }
    // else{
    //     console.log("Skorunuz :",score[3])
    // }

let randomNumber = Math.floor(Math.random() * 100) + 1;
let counter =0;
let score;
console.log(randomNumber)


const startGame =()=>{
    score = 100 - (counter*5)
    counter++;
    let tahmin =document.getElementById("guessInput").value;
    document.getElementById("guessCount").innerHTML = `Tahmin Sayınız : ${counter}`
    
    if(randomNumber==tahmin){
        document.getElementById("upDown").innerHTML = `Tebrikler ${counter} defada bildiniz :D Skorunuz ${score} `
    }
    else if(tahmin>randomNumber){
            document.getElementById("upDown").innerHTML = "Aşağı"
    }
    else if(tahmin<randomNumber){
        document.getElementById("upDown").innerHTML = "Yukarı"
    }
  
}
