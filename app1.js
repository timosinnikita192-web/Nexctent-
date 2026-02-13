/* ******************************************************************ПРИМЕНЕНИЕ**************************************************************************** */
const name1 = "Никита";
let age = 25;
let boo = true;

const header = document.querySelector("header"); /* селектор можно написать любой css как в html*/
const nav = document.querySelector ("nav");

console.log (header); /* object - объект*/ 

console.log (nav);

function sayHello () {
    let message = "Hello java " + name1;
    console.log(message); /* тут надо писать без "" чтобы увидеть текст в консоли
    а чтобы скрыть с "" */
}

sayHello();

function simpleMath(a, b) {
    let result = a + b;
    console.log(result)
    return result; /* вернуть результат сохранения */
} 
/* математическая функция */

let sum = simpleMath(121, 222) ;

console.log(sum);