import './style.css';

function init(){
    console.log('Loaded');    
}

function sotetfeher() {    
        let element = document.body;
        element.classList.toggle("dark-mode");    
}

document.getElementById('gomb').addEventListener('click',sotetfeher);
document.addEventListener('DOMContentLoaded',init);
console.log('betöltött');

