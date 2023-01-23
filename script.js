let numbers = prompt('Введіть, будь ласка, 3 цифри через кому.','');
let arr_Numbers = numbers.split(',');
console.log(arr_Numbers);
let result = arr_Numbers.reduce((sum, current) => sum + current); 
console.log(result);
let min;
if(arr_Numbers[0] < arr_Numbers[1] && arr_Numbers[0] < arr_Numbers[2]) {
    min = arr_Numbers[0]; 
} else if(arr_Numbers[1] < arr_Numbers[0] && arr_Numbers[1] < arr_Numbers[2]) {
    min = arr_Numbers[1];
} else if(arr_Numbers[2] < arr_Numbers[0] && arr_Numbers[2] < arr_Numbers[1]) {
    min = arr_Numbers[2];
}
console.log(min);
let max;
if(arr_Numbers[0] > arr_Numbers[1] && arr_Numbers[0] > arr_Numbers[2]) {
    max = arr_Numbers[0]; 
} else if(arr_Numbers[1] > arr_Numbers[0] && arr_Numbers[1] > arr_Numbers[2]) {
    max = arr_Numbers[1];
} else if(arr_Numbers[2] > arr_Numbers[0] && arr_Numbers[2] > arr_Numbers[1]) {
    max = arr_Numbers[2];
}
console.log(max);
alert('Перший номер це ' + arr_Numbers[0] + ',' + 'останній номер це ' + arr_Numbers[2] + `\n` + arr_Numbers[0] + '+' + arr_Numbers[1] + '+' + arr_Numbers[2] + ' = ' + result + `\n` +'Найменше число це ' + min + ',' + ' найбільше число це ' + max);
let number = prompt('Введіть, будь ласка одне число з тих, що ви вводили раніше.','');
console.log(number);
let en_num;
if(number === arr_Numbers[0]) {
    en_num = 'Перше число';
} else if(number === arr_Numbers[1]) {
    en_num = 'Друге число';
} else if(number === arr_Numbers[2]) {
    en_num = 'Третє число';
} else {
    en_num = 'Пробачте, але ви не вводили це число.';
}
console.log(en_num);
alert(en_num);