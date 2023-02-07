// -----------------------------------//
// Problem 1: Let’s play a mind game 
//-----------------------------------// 
function mindGame(input) {
    if (typeof input === 'number') {
        const setInput = Math.abs(input);

        let result = setInput * 3;
        result = result + 10;
        result = result / 2;
        result = result - 5;

        return result;
    }
    else {
        console.log("Please send number value as argument")
    }
}
// -------------------- Description ---------------//
/*
Here at the mindGame function first we are taking input as only parameter of this function. Then I am checking whether the argument is number or not. If it is a number then I converted it to positive number as per instruction. Then simply follow the calculation and in the result variable the final result is to be returning from the function. And If the argument in not number then we are returning with a message.
*/

// --------------------------------------------// 
//  Problem 2: Finding even or odd 
// ------------------------------------------// 


function evenOdd(string) {
    if (typeof string === 'string') {
        let count = string.length;
        if (count % 2 === 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
    else {
        console.log("Please use string as argument")
    }
}

// -------------------- Description ---------------//
/*
Here at the evenOdd function I am suppose to find out the string length and return the count whether it's even or odd. Here I am taking string as parameter and making sure that the argument which will be pass is a string otherwise it will generate a message. So, here I am using string.length() function which will give me the length of the string and after that I am checking with the mod operator whether that number is odd or even. And returning the value as per according.
*/

// let con = evenOdd('Saleheen');
// console.log(con);

// --------------------------------------------// 
// Problem 3: Is Less or Greater than seven 
// ------------------------------------------// 

function isLGSeven(number) {
    if (typeof number === 'number') {
        if (number < 7) {
            return console.log(number - 7);
        }
        else {
            return console.log(number * 2);
        }
    }
    else {
        console.log("Please use number as argument")
    }

}

// -------------------- Description ---------------//
/*
Here at the isLGSeven() function I need to check whether the parameter value is greater than 7 or not. So I am taking number as the parameter. Like previous checking for the number property in argument. After confirming here checking if the compare value is greater than 7 then deducting 7 from that number and returning the value and if not then multiplying the number with 2 and then returning. 
*/


// --------------------------------------------// 
// Problem 4: Finding Bad data 
// ------------------------------------------// 

function findingBadData(data) {
    let badData = 0;
    if (Array.isArray(data) === true) {

        for (let i = 0; i < data.length; i++) {
            if (data[i] < 0) {
                badData++;
            }
        }
        return badData;
    }
    else {
        return console.log("Please sent array as argument")
    }

}

// -------------------- Description ---------------//
/*
At the findingBadData() function here array will be passed as argument and data is taken as parameter to receive the argument. Checking with Array.isArray() function that if the value is array or not. Now checking every character and keeping a count in badData variable which is earlier declared by using a for loop. then returning the count value on upon. 
*/

// --------------------------------------------// 
// Problem 5: Convert your gems into diamond 
// ------------------------------------------// 

function gemsToDiamond(first, second, third) {
    const diamond1 = 21;
    const diamond2 = 32;
    const diamond3 = 43;
    let result = 0;
    if (typeof first === 'number' && typeof second === 'number' && typeof third === 'number') {
        result += first * diamond1;
        result += second * diamond2;
        result += third * diamond3;
        if (result > 1000 * 2) {
            return result = result - 2000;
        }
        else {
            return result;
        }
    }
    else {
        console.log("Error !! Wrong argument");
    }
}

// -------------------- Description ---------------//
/*
At the gemsToDiamond() this function is carrying 3 parameter of the 3 friends gems amount. Here I am considering the exchange amount of 3 using diamond1, diamond2, and diamond3 in these 3 variable. then upon clearing the type of the argument simply do the operation calculation and also using a conditional approach if the result exceed 2000 or not. If exceed then deducting 2000 as per instruction otherwise returning value of the result as it is. 
*/

// let con = gemsToDiamond(100, 5, 1);
// console.log(con);
