import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function sotetfeher() {    
        let element = document.body;
        element.classList.toggle("dark-mode");    
}

function urlChange() {
    document.getElementById('kepid').src = document.getElementById('kepurl').value;
}
function widthChange() {
    document.getElementById('kepid').style.width = parseInt(document.getElementById('kepszel').value)+"px";
}
function kepKeretChange() {        
        document.getElementById('kepid').style.border = parseInt(document.getElementById('kepkervas').value) +"px solid"+ document.getElementById('kepkerszin').value
}
function borderChange() {    
    document.getElementById('kepid').style.borderColor = document.getElementById('kepkerszin').value;
}

document.getElementById('kepurl').addEventListener('change',urlChange)
document.getElementById('kepszel').addEventListener('input',widthChange)
document.getElementById('kepkervas').addEventListener('input',kepKeretChange)
document.getElementById('kepkerszin').addEventListener('input',borderChange)
document.getElementById('gomb').addEventListener('click',sotetfeher);
