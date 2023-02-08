
let test = 1;
let test1 = 10;

if (test > 10) {
	console.log('+++'); 
} else {
	console.log('---');
}


if (test < 10){
	console.log('+++')
} else {
	console.log('---')
}


if (test >= 10){
	console.log('+++')
} else {
	console.log('---')
}


if (test <= 10){
	console.log('+++')
} else {
	console.log('---')
}


if (test1 == 10){
	console.log('+++')
} else {
	console.log('---')
}

if (test1 != 10){
	console.log('+++')
} else {
	console.log('---')
}

let test2 = 1;
let test3 = 2;

if (test2 > test3) {
	console.log('первая больше');
} else {
	console.log('вторая больше');
}

if (test2 == test3) {
	console.log('равны');
} else {
	console.log('не равны');
}

let test4 = 'abc';
let test5 = 'abc';

if (test4 == test5) {
	console.log('одинаковые'); // сработает это
} else {
	console.log('не одинаковые');
}

let test6 = 123;
let test7 = '123';

if (test6 == test7) {
	console.log('одинаковые'); // сработает это
} else {
	console.log('не одинаковые');
}	
let test8 = 3;
let test9 = '3';
		
if (test8 !== test9) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 2;


if (num > 0 && num < 5) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = 2;


if (num1 >= 10 && num1 <= 20) {
	console.log('+++');
} else {
	console.log('---');
}

let num2 = 2;
let num3 = 3;

if (num2 <= 1 && num3 >= 3) {
	console.log('+++');
} else {
	console.log('---');
}

if (!(num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}

let test10 = 3 * 'a';
		
if (test10 == true) {
	console.log('+++');
} else {
	console.log('---');
}

let test11 = true;

if (test11) {
	console.log('+++');
} else {
	console.log('---');
}

let test12 = true;

if (!test12) {
	console.log('+++');
} else {
	console.log('---');
}

let test13 = true;

if (!test13) {
	console.log('+++');
} else {
	console.log('---');
}

let test14 = true;

if (test14) {
	console.log('+++');
} else {
	console.log('---');
}

let test15 = 3;

if (test15) {
	console.log('+++');
} else {
	console.log('---');
}

let test16 = 'abc';

if (test16) {
	console.log('+++');
} else {
	console.log('---');
}

let test17 = '';

if (test17) {
	console.log('+++');
} else {
	console.log('---');
}

let test18 = 3 * 'abc';

if (test18) {
	console.log('+++');
} else {
	console.log('---');
}

let test19 = null;

if (test19) {
	console.log('+++');
} else {
	console.log('---');
}

let test20 = false;

if (test20) {
	console.log('+++');
} else {
	console.log('---');
}

let test21;

if (test21) {
	console.log('+++');
} else {
	console.log('---');
}

let test22 = 0;

if (test22) {
	console.log('+++');
} else {
	console.log('---');
}

let test23 = '0';

if (test23) {
	console.log('+++');
} else {
	console.log('---');
}

let test24 = -1;

if (test24) {
	console.log('+++');
} else {
	console.log('---');
}

let test25 = true;
let test26 = true;

if (test25 && test26) {
	console.log('+++');
} else {
	console.log('---');
}

let test27 = true;
let test28 = true;

if (test27 && !test28) {
	console.log('+++');
} else {
	console.log('---');
}

let test29 = 10;

if (test29 == 10) {
	console.log('yes');
} else {
	console.log('---')
}

if (test > 0) console.log('+++'); else console.log('---');

let num4 = 12;

if (num4 >= 1 && num4 <= 10) {
	console.log('1 декада');
} else if (num4 >= 11 && num4 <= 20) {
	console.log('2 декада');
} else if (num4 >=21 && num4 <= 31) {
	console.log('3 декада');
} else {
	console.log('неверное значение переменной num');
}

let num5 = 89;

if (num5 >= 10 && num5 <= 99) {
	summ = ((num5 % 10) + (num5 - (num5 % 10)) / 10);
	console.log(summ)
	if (summ <= 9) {
		console.log('сумма цифр однозначна');
	}
	else {
		console.log('Сумма цифр двузначна');
	}
} 
let lang = 'ru';

switch (lang) {
	case 'ru':
		console.log('рус');
	break;
	case 'en':
		console.log('анг');
	break;
	case 'de':
		console.log('нем');
	break;
	default:
		console.log('язык не поддерживается'); 
	break;
}

let num6 = 1;

let res = num6 >= 0 ? 1 : 2;

console.log(res);

let a = 2 * (3 - 1);
let b = 6 - 2
let result = a == b;
console.log(result);

let a1 = 5 * (7 - 4);
let b1 = 1 + 2 + 7;
if (a1 > b1){
	console.log('a больше');
}
else {
	console.log('b больше')
}

let a2 = 2 ** 4;
let b2 = 4 ** 2;
let result1 = a != b;
console.log(!result1);

// let ok = confirm('Вам уже есть 18 лет?');

// if (ok) {
// 	alert('Длина ступни равна длине пениса');
// } else {
// 	alert('Тебе сюда нельзя');
// }

let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);

let age1 = 17;
let adul1t;

if (age1 >= 18) {
	adult1 = true;
} else {
	adult1 = false;
}

console.log(adult);

let age3 = 17;
let adult3;

if (age3 >= 18) {
	adult3 = true;
} else {
	adult3 = false;
}

console.log(adult);

let age4 = 20;
let res4;

if (age4 >= 18 && age4 <= 23) {
	res4 = 'от 18 до 23';
} 
else if (age4 > 23) {
	res4 = 'больше 23';
}
else {
	res4 = 'меньше 18';
}

console.log(res4);

let age5 = 25;
let res5;

if (age5 >= 18 && age5 <= 23) {
	res5 = 'от 18 до 23';
}
else if (age5 > 23){
	res5 = 'больше 23';
}
else {
	res5 = 'меньше 18';
}

console.log(res5);

let min = 10;

if (min >= 0 && min <= 19) {
	console.log('1 четверть');
}

if (min >= 20 && min <= 39) {
	console.log('2 четверть');
}

if (min >= 40 && min <= 59) {
	console.log('3 четверть');
}

let str = '256';

if (str.length == 3) {
	summ23 = ((str - (str % 100)) / 100 + ((str % 100) - (str % 10)) /10 + (str % 10));
	console.log(summ23);
}