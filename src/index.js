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
document.getElementById('kepszel').addEventListener('change',widthChange)
document.getElementById('kepkervas').addEventListener('change',kepKeretChange)
document.getElementById('kepkerszin').addEventListener('change',borderChange)
document.getElementById('gomb').addEventListener('click',sotetfeher);
