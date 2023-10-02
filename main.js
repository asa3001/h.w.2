const green = document.querySelector('.green');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const btn = document.querySelector('.btn');

green.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'green';
});

red.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'red';
});

blue.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'blue';
});

btn.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'white';
});