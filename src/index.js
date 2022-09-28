import './style.css';


function init(){
    console.log('Loaded');    
}

function sotetfeher() {    
        let element = document.body;
        element.classList.toggle("dark-mode");    
}

function urlChange() {
    document.getElementById('kepid').src = document.getElementById('kepurl').value;
}
function widthChange() {
    console.log('képszélessége');
    document.getElementById('kepid').style.width = parseInt(document.getElementById('kepszel').value)+"px";
}
function kepKeretChange() {        
        document.getElementById('kepid').style.border = parseInt(document.getElementById('kepkervas').value) +"px solid"+ document.getElementById('kepkerszin').value
}
function borderChange(e) {    
    document.getElementById('kepid').style.borderImageColor = e.CurrenTarget().value;
}

document.getElementById('kepurl').addEventListener('change',urlChange)
document.getElementById('kepszel').addEventListener('change',widthChange)
document.getElementById('kepkervas').addEventListener('change',kepKeretChange)
document.getElementById('kepkerszin').addEventListener('change',borderChange)
document.getElementById('gomb').addEventListener('click',sotetfeher);
document.addEventListener('DOMContentLoaded',init);
console.log('betöltött');
