function a() {
    console.log('x');
    b();
    console.log('xx');
}

function b() {
    console.log('y');
    d();
    console.log('yy');
}

function d() {
    console.log('z');
    console.log('zz');
}

setTimeout(() => {
    console.log('inside timeout');
}, 5000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

a();