

const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
function colorTeme(e){
    body.classList.toggle('light');
    body.classList.toggle('dark');

}

toggle.addEventListener('click', colorTeme);