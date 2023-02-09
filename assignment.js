/*----------(Problem-1)----------*/
/*This function will multiply a number by 3, then add 10, then divide by 2, then subtract 5, then will return the output.*/
function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Please enter a number!!'
    }
    const multiplication = number * 3;
    const addition = multiplication + 10;
    const division = addition / 2;
    const subtraction = division - 5;
    const finalResult = subtraction;
    return finalResult;
}
const result = mindGame(10);
console.log(result);

/*----------(Problem-2)----------*/
/*This function will give output based on the total number of characters in the string.*/
function evenOdd(string) {
    if (typeof string !== 'string') {
        return 'Please enter a string!!'
    }
    else if (string.length % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
const output = evenOdd('Programming Hero');
console.log(output);

/*----------(Problem-3)----------*/
/*This function will find the difference between the input value and 7. If this difference is smaller than 7, it will return the value of subtraction. Otherwise it will return double of the input.*/
function isLGSeven(number) {
    const difference = number - 7;
    if (typeof number !== 'number') {
        return 'Please enter a number!!'
    }
    else if (difference < 7) {
        return difference;
    }
    else {
        return number * 2;
    }
}
const solution = isLGSeven(15);
console.log(solution);

/*----------(Problem-4)----------*/
/*This function will find bad data from the array and will return that number.*/
function findingBadData(array) {
    const badArray = [];
    for (i = 0; i < array.length; i++) {
        const age = array[i];
        if (age < 0) {
            badArray.push(age);
        }
    }
    return badArray;
}
const arrayData = findingBadData([12, -18, -9, 33, 16, -5, -7, -13]);
console.log(arrayData.length);

/*----------(Problem-5)----------*/
/*This function will figure out how many diamonds will one get in total by combining the gems of all friends. If the number of total diamond is over 1000, then one will get as many diamonds as are left by subtracting 2000 from the total diamond.*/
function gemsToDiamond(gem1, gem2, gem3) {

    const firstFriendGemPower = 21;
    const secondFriendGemPower = 32;
    const thirdFriendGemPower = 43;

    const firstFriendDiamond = firstFriendGemPower * gem1;
    const secondFriendDiamond = secondFriendGemPower * gem2;
    const thirdFriendDiamond = thirdFriendGemPower * gem3;

    const allFriendsDiamonds = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

    if (allFriendsDiamonds > 1000 * 2) {
        const getDiamonds = allFriendsDiamonds - 2000;
        return getDiamonds;
    }
    else if (allFriendsDiamonds < 1000 * 2) {
        return allFriendsDiamonds;
    }
    else (typeof gem1 !== 'number' || gem2 !== 'number' || gem3 !== 'number'); {
        return 'Please enter the gems number!!!'
    }
}
const totalDiamond = gemsToDiamond(20, 200, 50);
console.log(totalDiamond);