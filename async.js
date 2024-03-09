console.log(1);
console.log(2);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

doSomething();
setTimeout(doSomething);
setTimeout(() => {
    console.log('ghar tera');
}, 1000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
    console.log('\n' + 3);
}