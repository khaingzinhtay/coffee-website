let menu = document.getElementById('nav');
let open = document.getElementById('menu-btn');
let close = document.getElementById('close');
function openmenu(){
    menu.style.left="0";
    open.style.display="none";
    close.style.display="block";
}
function closemenu(){
    menu.style.left="-100%";
    open.style.display="block";
    close.style.display="none";
}
