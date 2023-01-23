let numbers = prompt('Введіть, будь ласка, 3 цифри через кому.','');
let arrNumbers = numbers.split(',');
console.log(arrNumbers);
let result =  arrNumbers.reduce((sum, current) => sum + Number(current), 0); 
console.log(result);
let min;
if(arrNumbers[0] < arrNumbers[1] && arrNumbers[0] < arrNumbers[2]) {
    min = arrNumbers[0]; 
} else if(arrNumbers[1] < arrNumbers[0] && arrNumbers[1] < arrNumbers[2]) {
    min = arrNumbers[1];
} else if(arrNumbers[2] < arrNumbers[0] && arrNumbers[2] < arrNumbers[1]) {
    min = arrNumbers[2];
}
console.log(min);
let max;
if(arrNumbers[0] > arrNumbers[1] && arrNumbers[0] > arrNumbers[2]) {
    max = arrNumbers[0]; 
} else if(arrNumbers[1] > arrNumbers[0] && arrNumbers[1] > arrNumbers[2]) {
    max = arrNumbers[1];
} else if(arrNumbers[2] > arrNumbers[0] && arrNumbers[2] > arrNumbers[1]) {
    max = arrNumbers[2];
}
console.log(max);
alert('Перший номер це ' + arrNumbers[0] + ',' + 'останній номер це ' + arrNumbers[2] + `\n` + arrNumbers[0] + '+' + arrNumbers[1] + '+' + arrNumbers[2] + ' = ' + result + `\n` +'Найменше число це ' + min + ',' + ' найбільше число це ' + max);
let number = prompt('Введіть, будь ласка одне число з тих, що ви вводили раніше.','');
console.log(number);
let enNum;
if(number === arrNumbers[0]) {
    enNum = 'Перше число';
} else if(number === arrNumbers[1]) {
    enNum = 'Друге число';
} else if(number === arrNumbers[2]) {
    enNum = 'Третє число';
} else {
    enNum = 'Пробачте, але ви не вводили це число.';
}
console.log(enNum);
alert(enNum);