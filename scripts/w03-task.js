/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);  
    document.querySelector("#sum").value = add(addNumber1,addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

let subtract = function(substract1, substract2)
{
    return substract1 - substract2;
}

let substractNumbers = function(){
    let substractNumber1 = Number(document.querySelector("#subtract1").value);
    let substractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(substractNumber1, substractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", substractNumbers);

/* Arrow Function - Multiply Numbers */

    let multiply = (multiply1, multiply2) => multiply1 * multiply2;

    let multiplyNumbers = () => {
        let multiplyNumber1 = Number(document.querySelector("#factor1").value);
        let multiplyNumber2 = Number(document.querySelector("#factor2").value);
        document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
    };

    document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

    let divide = (dividend, divisor)=> dividend / divisor;
    let divideNumbers = () => {
        let dividend1 = Number(document.querySelector("#dividend").value);
        let divisor1 = Number(document.querySelector("#divisor").value);
        document.querySelector("#quotient").value = divide(dividend1, divisor1);
    }

    document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let getTotalButton = document.querySelector("#getTotal");
getTotalButton.addEventListener("click", GetTotalDue)

function GetTotalDue(){
    let subtotal = Number(document.querySelector("#subtotal").value);
    let total = document.querySelector("#total");
    if(document.querySelector("#member").checked){
        let discount = subtotal - (subtotal * 20/100) ;
        total.textContent = `$ `+ `${discount.toFixed(2)}`;
        return total.textContent;
    }

    else
    {
        total.textContent = `$ `+ `${subtotal.toFixed(2)}`;
        return total.textContent;
    }

}
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector("#array").textContent = numbers;

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numbers.filter(odd => odd % 2 != 0);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbers.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbers.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbers.map((num) => num * 2);
/* Output Sum of Multiplied by 2 Array */
let mult = numbers.map((num) => num * 2);
let initialValue = 0;
document.querySelector("#sumOfMultiplied").innerHTML = mult.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);