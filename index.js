// 1

function averageOfNumbers(array) {
    let sum = 0;
    let quantityOfNumbers = 0;
    for (let i in array) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            quantityOfNumbers++;
        }
    }
    let average = quantityOfNumbers > 0 ? sum / quantityOfNumbers : 0;
    return average;
}

console.log(averageOfNumbers([0, 2, 3, 'a', 'b', 3, 4]));


// 2

function doMath(x, znak, y) {
    let result = null;
    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = x ** y;
            break;
        default:
            result = NaN;
            break;
    }
    return result;
}

console.log(doMath(10, '*', 5));


// 3

function createTwoDimensionalArray() {
    let mainArray = [];
    let mainArrayLength = 0;
    do {
        mainArrayLength = parseInt(prompt('Please, enter length of main array'));
    } while (mainArrayLength < 0 || isNaN(mainArrayLength));
    
    for (let i = 1; i <= mainArrayLength; i++) {
        let nestedArray = [];
        let nestedArrayLength = 0;
        do {
            nestedArrayLength = +prompt(`Please, enter length of ${i}\'th nested array`);
        } while (nestedArrayLength < 0 || isNaN(nestedArrayLength));
        for (let j = 1; j <= nestedArrayLength; j++) {
            let newValueForNestedArray = prompt(`Please, enter ${j}\'th element in nested array`);
            nestedArray.push(newValueForNestedArray);
        }
        mainArray.push(nestedArray);
    }
    return mainArray;
}

console.log(createTwoDimensionalArray());


// 4

function deleteValues(string, arrayWithValuesForRemoving) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (!arrayWithValuesForRemoving.includes(string[i])) {
            newString += string[i];
        }
    }
    return newString;
}

console.log(deleteValues(" hello world", ['l', 'd']));
