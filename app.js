const dob = document.querySelector(".date-of-birth");
const luckyNumber = document.querySelector(".lucky-number");
const btnCheck = document.querySelector(".btn-chk");
const resultPositive = document.querySelector(".result-positive");
const resultNegative = document.querySelector(".result-negative");

function sumOfDigits(dob)
{
    var sum = 0;
    dob = dob.replaceAll("-", "");
    for(var i = 0; i < dob.length; i++)
    {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
};

function luckyOrNot(sum){
    if(sum % Number(luckyNumber.value) === 0){
        resultNegative.style.display = "none";
        resultPositive.innerText = "Congrats! your birthday is LUCKY!!!";
        resultPositive.style.display = "block";
    }
    else{
        resultPositive.style.display = "none";
        resultNegative.innerText = "Your birthday is not lucky, but don't be sad.....go and make your own luck.";
        resultNegative.style.display = "block";
    }
};

function clickEventHandler(){
    var sum = sumOfDigits(dob.value);
    luckyOrNot(sum);
};

btnCheck.addEventListener("click", clickEventHandler);