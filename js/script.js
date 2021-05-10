'use strict';
// дальше идет весь код файла


/*'JavaScript is awesome'.toUpperCase();
'JavaScript is awesome'.length;*/

const message = 'JavaScript is awesome!';
/*
 * В круглых скобках указываем имя переменной,
 * значение которой необходимо вывести в консоль
 */
console.log(message); // JavaScript is awesome!

const name = 'Mango';
/*
 * Можно сначала указать какую-то произвольную строку,
 * к примеру описывающую переменную или дополняющую ее, после чего
 * поставить запятую и указать имя переменной
 */
console.log('My name is: ', name); // My name is: Mango

/*
 * alert выводит модальное окно, текст которого соотсветствует значению
 * переменной (или литерала) которую мы укажем в скобках.
 */
alert(message);