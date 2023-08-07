let hamburger = document.getElementById('hamburger');
let close = document.getElementById('close');
let nav = document.getElementById('nav');

hamburger.onclick=() =>{
    nav.style.right = '0';
}
close.onclick=() =>{
    nav.style.right = '-100%';
}