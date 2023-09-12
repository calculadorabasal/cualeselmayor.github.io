let num1 = 13;
let num2 = 24;
let num3 = 7; 

  
function numMayor(num1, num2, num3) {
    if (num1>=num2 && num1>=num3){
        return num1;
    }
   else if (num2>=num1 && num2>=num3){
        return  num2;
    } 
    else if (num3>=num1 && num3>=num2){
       return num3;
    }
}

console.log(numMayor(13,24,7))