

const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const svgL = document.querySelector('.svg__l');
const svgD = document.querySelector('.svg__d');


function colorTeme(){
    body.classList.toggle('light');
    body.classList.toggle('dark');
    svgL.classList.toggle('light__svg');
    svgL.classList.toggle('dark__svg');
    svgD.classList.toggle('light__svg');
    svgD.classList.toggle('dark__svg');

}

toggle.addEventListener('click', colorTeme);