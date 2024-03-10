console.log(1);
console.log(2);

/**
 * 1.
 * ------ setTimeout ------
 * ==> ekbar execute hoy
 */
// setTimeout(() => {
//     console.log(3);
// })
setTimeout(() => {
    console.log(3);
}, 4000);

/**
 * 2.
 * ------ setInterval ------
 * ==> bar-bar execute hoy
 */
let num = 0;
// setInterval(() => {
//     num++;

//     console.log(num);
// }, 2000);

const clockId = setInterval(() => {
    num++;

    console.log(num);

    if(num >= 4) {
        clearInterval(clockId);
    }
}, 2000);

console.log(5);
console.log(6);