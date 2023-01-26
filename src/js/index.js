

const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const svgTeme = document.querySelectorAll('.svg__teme');
console.log(svgTeme);
function colorTeme(){
    body.classList.toggle('light');
    body.classList.toggle('dark');
    svgTeme.classList.toggle('light__svg');
    svgTeme.classList.toggle('dark__svg');
}

toggle.addEventListener('click', colorTeme);