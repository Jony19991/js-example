"use strick"; 

// Урок 9 Conditions and modal windows
// Домашнее задание
// 1. При помощи модального окна prompt выведите в консоль или через alert введенный в 
// окно текст.
// Примерный алгоритм
// - введите текст (prompt)
// - {введенный текст} (alert)

// const login = prompt('Your login') 
// alert (login)
// console.log(login)

// 2. Написать программу, которая при помощи окон prompt позволит ввести и сложить три 
// числа.
// Примерный алгоритм
// - введите первое число (prompt)
// - введите второе число (prompt)
// - сумма = {сумма чисел} (alert)
// Итоговую сумму вывести в консоль или через alert.

// let num1 = +prompt('Введите число №1');
// let num2 = +prompt('Введите число №2');
// let num3 = +prompt('Введите число №3');
// let num4 = num1 + num2 + num3;
// alert(num4);
// console.log(num4);

// 3. Напишите программу, которая:
// - запрашивает имя пользователя (prompt);
// - запрашивает возраcт пользователя (prompt);
// - если возраст пользователя больше либо равен 18 выводит сообщение в духе "Добро 
// пожаловать {имя пользователя}" (alert);
// - если возраст пользователя меньше 18 выводит сообщение в духе "Простите, {имя 
// пользователя}, доступ закрыт".

// let nameUser = prompt('Ваше имя')
// let ageUser = +prompt('Ваш возраст')
//     if(ageUser >17) {
//         alert('Добро пожаловать ' + nameUser)
//         console.log('Добро пожаловать ' + nameUser)      
// } else if(ageUser <18) {
//     alert('Простите, ' + nameUser +' доступ закрыт')
//     console.log('Простите, ' + nameUser +' доступ закрыт')
// } 

// 4. Напишите программу, позволит вывести в консоль название для класса html элемента, 
// которая будет работать по следующему алгоритму. Программа предполагает 
// последовательное суммирование названий блока, элемента и модификатора, если они 
// будут обозначены.
// Хотите ввести название блока? (confirm)
// - нет - вывести в консоль сообщение о том, что элементу не присвоен класс (confirm).
// - да - вывести окно для ввода названия блока (prompt)
// Хотите ввести название элемента? (confirm)
// - нет - вывести в консоль название блока. Закончить выполнение скрипта.
// - да - вывести окно для ввода названия элемента (prompt)
// Хотите ввести название модификатора? (confirm)
// - да - вывести окно для ввода названия элемента (prompt). Вывести в консоль итоговое 
// название класса (блок + элемент + модификатор).
// - нет - вывести в консоль итоговое название (блок + элемент).
// Демо-видео с работой программы.
// https://drive.google.com/open?id=1LJqY9Hawjk9nspqvRvNY4fhNsoTiMLQl

let nameBlok = confirm('Хотите ввести название блока?');
if(nameBlok === true){
  var nameBlokk = prompt('Ведите название блока')
    console.log(nameBlokk)
} else if(nameBlok === false) {
  var nameBlokk = prompt('Элементу не присвоен класс')
    console.log(nameBlokk)
};
let nameElement = confirm('Хотите ввести название элемента?');
if(nameElement === true){
   var nameElementt = prompt('Ведите название элемента')
    console.log(nameElementt)
} else if(nameElement === false) {
    alert(nameBlokk)
    console.log(nameBlokk)
};
let nameMode = confirm('Хотите ввести название модификатора?');
if(nameMode === true){
    var nameMod = prompt('Ведите название модификатора')
    alert(nameBlokk + nameElementt + nameMod)
    console.log(nameBlokk + nameElementt + nameMod)
} else if(nameMode === false) {
    alert(nameBlokk + nameElementt)
    console.log(nameBlokk + nameElementt)
};


// 5. Написать программу, которая производит одну из четырех арифметических операций 
// с двумя числами по выбору пользователя.
// Выбор нужной арифметической операции напрямую подскажите пользователю в тексте 
// окна.
// Примерный алгоритм
// - введите первое число (prompt);
// - введите второе число (prompt);
// - выберите нужную арифметическую операцию (div, plus, mult, minus) (prompt);
// - вывести итоговый результат в консоль / alert.

// let number1 = +prompt('введите первое число');
// let number2 = +prompt('введите второе число');
// let variantNum = prompt('выберите нужную арифметическую операцию (div, plus, mult, minus)');
// if(variantNum === 'div'){
//     let pl = alert(number1 * number2)
// } else if(variantNum === 'plus'){
//     let pl = alert(number1 + number2)
// } else if(variantNum === 'mult'){
//     let pl = alert(number1 / number2)
// } else if(variantNum === 'minus'){
//     let pl = alert(number1 - number2)
// };


// Урок 10 && and ||
// Домашнее задание
// 1. Напишите программу, которая последовательно запрашивает у пользователя имя, 
// фамилию и никнейм. Далее при помощи alert или консоли отобразите приветственное 
// сообщение исходя из следующих условий:
// - введены имя, фамилия и никнейм -> обратиться к пользователю по имени и фамилии;
// - введены имя, фамилия -> обратиться к пользователю по имени и фамилии;
// - введены никнейм и фамилия -> обратиться к пользователю через никнейм;
// - введены никнейм и имя -> обратиться к пользователю через имя;
// - не введено ни одно значение или введена только фамилия или только никнейм -> 
// обратиться к пользователю через ‘Noname’;

// let mame = prompt('введите имя');
// let family = prompt('введите фамилию');
// let nik = prompt('введите ник');
// if(mame && family && nik){
//     var one = alert(mame + family);
//     console.log(mame + family);
// } else if(mame && family){
//     var one = alert(mame + family);
//     console.log(mame + family);
// } else if(family && nik){
//     var one = alert(nik);
//     console.log(nik);
// } else if(mame && nik){
//     var one = alert(mame);
//     console.log(mame);
// } else if(mame || nik || ' '){
//     var one = alert('Noname');
//     console.log('Noname');}


// 2. При помощи prompt запросите у пользователя любое число и проведите его проверку 
// по следующим параметрам – больше/меньше 100, четное/нечетное, дробное/не 
// дробное, положительное/отрицательное.
// Результаты проверки выведите на экран любым доступным способом примерно в 
// следующем формате - "Введенное вами число меньше ста, четное, положительное, 
// недробное".
// Необязательное условие: если пользователь ввел значение, которое нельзя 
// преобразовать к числу, то сообщите об этом пользователю и попробуйте определить 
// язык, на котором введено сообщение. Условно предполагаем, что все символы были 
// введены на одно языке.

// let numberFirst = +prompt('Введите число')
// if(numberFirst < 100){
//     one = 'Число меньше 100, '
// } else if(numberFirst > 99) {
//     one = 'Число больше 100, '
// };
// if(numberFirst % 2 !== 0){
//     two = 'нечетное, '
//     // console.log('нечетное')
// } else if(numberFirst % 2=== 0){
//     two = 'четное, '
// }; 
// if(numberFirst < 100){
//     three = 'отрицательное, '
// } else{
//     three = 'положительное, '
// };
// if(Number.isInteger(numberFirst)){
//     four = 'целое '
// } else {
//     four = 'дробное '
// };
// alert(one + two + three + four);
// console.log(one + two + three + four)


// 3. Перепишите задачи 2 и 3 из предыдущего домашнего задания, используя вместо if
// тернарный оператор.

// let name = prompt('Ваше имя')
// let age = +prompt('Ваш возраст')
// age > 17 ? console.log('Добро пожаловать ' + name) : console.log('Простите, ' + name +' доступ закрыт');
// age > 17 ? alert('Добро пожаловать ' + name) : alert('Простите, ' + name +' доступ закрыт');


// let nameBlok2 = confirm('Хотите ввести название блока?');
// nameBlokk2 = nameBlok2 === true ? prompt('Ведите название блока') : prompt('Элементу не присвоен класс');
// let nameElement2 = confirm('Хотите ввести название элемента?');
// nameElementt2 = nameElement2 === true ? prompt('Ведите название элемента') : prompt(nameBlokk2);
// let nameMode2 = confirm('Хотите ввести название модификатора?');
// nameMod2 = nameMode2 === true ? prompt('Ведите название модификатора') : alert(nameBlokk2 + nameElementt2);
// nameMod2 = nameMode2 === true ? alert(nameBlokk2 + nameElementt2 + nameMod2) : alert(nameBlokk2 + nameElementt2)


// 4. При помощи конструкции switch-case напишите программу, которая выводит на экран 
// введенные цифры от 0 до 9 в текстовом виде.
// Пример: 0 -> 'ноль', 1 -> 'один', 2 -> 'два' и т.д.
// В случае, если введенная цифра превысила 10, программа должна уведомлять об этом 
// пользователя соответствующим сообщением.
// Случай, когда пользователь ввел некорректное значение, которое невозможно 
// преобразовать к числу, также должен обрабатываться. Для такой проверки можно 
// использовать функцию isNaN(value) - которая возвращает false для числовых значений и 
// true для прочих.

// let firstNumber = +prompt('введите число')
// if (isNaN(firstNumber)){
//     console.log('Введены некорректные данные')
// } else {
// switch(firstNumber) {
//     case 1:
//         console.log ('Один');
//         break;
//     case 2:
//         console.log ('Два');
//         break;
//     case 3:
//         console.log ('Три');
//         break;
//     case 4:
//         console.log ('Четыре');
//         break;
//     case 5:
//         console.log ('Пять');
//         break;
//     case 6:
//         console.log ('Шесть');
//         break;
//     case 7:
//         console.log ('Семь');
//         break;
//     case 8:
//         console.log ('Восемь');
//         break;
//     case 9:
//         console.log ('Девять');
//         break;
//     case 10:
//         console.log ('Десять');
//         break;
//     default:
//         console.log ('Больше десяти');
// }}
